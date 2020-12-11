import React, { useEffect } from "react";
import {
  MapContainer,
  LayersControl,
  LayerGroup,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  useMapEvent,
  useMap,
} from "react-leaflet";
// import census from "citysdk";
import config from "../config";
import "./MapLeaflet.css";

// const addMSAToMap = (lng = -75.16, lat = 39.9) => {
//   let data;
//   census(
//     {
//       vintage: 2017,
//       geoHierarchy: {
//         "state": "42",
//         "tract": {
//           lat: lat,
//           lng: lng,
//         },
//       },
//       geoResolution: "500k",
//       sourcePath: ["acs", "acs5"],
//       values: ["B00001_001E"],
//       statsKey: config.CENSUS_API_KEY,
//     },
//     (error, response) => {
//       if (error) {
//         console.log(error);
//         return error;
//       }
//       data = response;
//       return response;
//     }
//   );
//   return data;
// }
// console.log(addMSAToMap())

function MapLeaflet({
  mapState: { mapData, setMapData },
  properties,
  defaultTab,
}) {
  /* State from App */
  let { zoom, center, msaShape, tractShape, } = mapData;

  const CaptureMapState = () => {
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
        map.flyTo([39.971867614829016, -75.11917011259358], 13);
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
        minZoom={7}
        zoom={zoom}
        maxBounds={[
          [38.0, -73.8],
          [41.0, -76.6],
        ]}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${config.MAPBOX_API_KEY}`}
          />

          <LayersControl position="topright">
            <LayersControl.Overlay checked name="MSA shape">
              {Object.keys(msaShape).length && <GeoJSON data={msaShape} style={{color: 'red'}} />} 
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="CT shape">
              {Object.keys(tractShape).length && <GeoJSON data={tractShape} style={{color: 'blue'}}/>}
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Property markers">
              <LayerGroup>
                {renderMarkers}
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
          
          <CaptureMapState />
      </MapContainer>
    </div>
  );
}

export default MapLeaflet;

MapLeaflet.defaultProps = {
  mapState: { mapData: {}, 
    setMapData: () => {} },
    properties: [],
    defaultTab: false,
};
