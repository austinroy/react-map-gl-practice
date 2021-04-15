import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { Component, useEffect, useRef, useState } from 'react'
import MapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

const token = process.env.REACT_APP_TOKEN 

const SearchableMap = () => {
  const [ viewport, setViewPort] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
    transitionDuration: 100
  })
  const [searchResultLayer, setSearchResult ] = useState(null)

  const mapRef = useRef()

  const handleOnResult = event => {
    console.log(event.result)
    setSearchResult( new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    )
  }

  const handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    console.log("Updating")

    return setViewPort({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  }
  
  useEffect(() => {
    console.log({viewport})
  },[viewport])

  return (
    <div style={{ height: '100vh'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>Use the search bar to find a location or click <a href="/">here</a> to find your location</h1>
      <MapGL 
        ref={mapRef}
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        width="100%"
        height="90%"
        onViewportChange={setViewPort}
        mapboxApiAccessToken={token}
        >
          <Geocoder 
            mapRef={mapRef}
            onResult={handleOnResult}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={token}
            position='top-left'
          />
        </MapGL>
        <DeckGL {...viewport} layers={[searchResultLayer]} />
    </div>
  )

}

export default SearchableMap