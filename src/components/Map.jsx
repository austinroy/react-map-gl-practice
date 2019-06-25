import React,{ useState, useRef } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
import config from '../config'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN=config.REACT_APP_TOKEN

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
    <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location</h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: false}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}

export default Map