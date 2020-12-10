import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import config from '../config';
import './MapLeaflet.css';

function MapLeaflet({mapState: { mapData, setMapData }, properties}) {
  /* State from App */
  let { zoom, center } = mapData;

  function ReturnCenter() {
    const captureMap = useMapEvent('moveend', () => {
      setMapData({
        ...mapData,
        zoom: captureMap.getZoom(),
        center: captureMap.getCenter()
      })
    });
    return null;
  }


  const renderMarkers = properties.map((property) => (
    <Marker
      key={property.address.streetAddress}
      position={[property.latitude, property.longitude]}
    >
      <Popup>
        <span>{property.address.streetAddress},</span> <br />
        <span>{property.address.city}, {property.address.state} </span>
        <span>{property.address.zipcode}</span>
      </Popup>
    </Marker>
  ));

  return(
    <div>
      <MapContainer
        center={center}
        minZoom={9}
        zoom={zoom}
        maxBounds={[[38.6, -74.2], [40.6, -76.2]]}
        >
        <TileLayer 
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${config.MAPBOX_API_KEY}`}
        />
        {renderMarkers}
        <ReturnCenter />
      </MapContainer>
    </div>
  );
}

export default MapLeaflet;

MapLeaflet.defaultProps = {
}