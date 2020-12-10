import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  useMapEvent,
  useMap,
} from "react-leaflet";
import census from 'citysdk';
import config from "../config";
import "./MapLeaflet.css";

function MapLeaflet({
  mapState: { mapData, setMapData },
  properties,
  defaultTab,
}) {
  /* State from App */
  let { zoom, center, msaShape, lat, lng } = mapData;

  const addMSAToMap = (lng, lat) => {
    return census(
      {
        vintage: 2017,
        geoHierarchy: {
          "metropolitan statistical area/micropolitan statistical area": {
            lat: lat,
            lng: lng,
          },
        },
        geoResolution: "5m",
        sourcePath: ["cbp"],
        values: ["EMP"],
        statsKey: config.CENSUS_API_KEY,
      },
      (error, response) => {
        if (error) {
          console.log(error);
          return error;
        }
        setMapData({
          ...mapData,
          msaShape: response
        })
        console.log(response.features[0].geometry.coordinates[1])
        console.log(msaShape)
        return response;
      }
    );
  }
  


  const ReturnCenter = () => {
    const captureMap = useMapEvent("moveend", () => {
      setMapData({
        ...mapData,
        zoom: captureMap.getZoom(),
        center: captureMap.getCenter(),
      });
    });

    let map = useMap();
    useEffect(() => {
      if (defaultTab) {
        map.flyTo([39.9, -75.16], 10);
      }
    });
    return null;
  };

  const renderMarkers = properties.map((property) => (
    <Marker
      key={property.address.streetAddress}
      position={[property.latitude, property.longitude]}>
      <Popup>
        <span>{property.address.streetAddress},</span> <br />
        <span>
          {property.address.city}, {property.address.state}{" "}
        </span>
        <span>{property.address.zipcode}</span>
      </Popup>
    </Marker>
  ));

  return (
    <div>
      <MapContainer
        center={center}
        minZoom={9}
        zoom={zoom}
        maxBounds={[
          [38.6, -74.2],
          [40.6, -76.2],
        ]}>
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
  mapState: { mapData: {}, setMapData: () => {} },
  properties: [],
  defaultTab: false,
};
