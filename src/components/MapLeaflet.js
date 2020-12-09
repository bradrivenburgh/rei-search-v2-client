import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import config from '../config';
import 'leaflet/dist/leaflet.css';
import './MapLeaflet.css';

function MapLeaflet({mapData, properties}) {
  /* State from App */
  let { zoom } = mapData;

  const createMarkers = (properties) => {
    properties.map(property => 
      <Marker
        key={properties.address.streetAddress}
        position={[
          properties.latitude,
          properties.longitude
        ]}
      />
    )
  }

  return(
    <div>
      <MapContainer
        center={[39.9, -75.16]}
        minZoom={9}
        zoom={zoom}
        maxBounds={[38.6, -74.2], [40.6, -76.2]}
        >
        <TileLayer 
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${config.MAPBOX_API_KEY}`}
        />
      </MapContainer>
    </div>
  );
}

export default MapLeaflet;

MapLeaflet.defaultProps = {
  mapData: {
    lat: 39.9,
    lng: -75.16,
    zoom: 10  
  }
}