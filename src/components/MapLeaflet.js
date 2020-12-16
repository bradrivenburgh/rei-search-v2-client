import React, { useEffect, useRef, useState } from "react";
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
import config from "../config";
import "./MapLeaflet.css";

function MapLeaflet({
  mapState: { mapData, setMapData },
  properties,
  defaultTab,
  HUDPosition,
}) {
  /* State from App */
  let {
    lat,
    lng,
    zoom,
    center,
    msaShape,
    placeShape,
    tractShape,
    displayLayer,
  } = mapData;

  let [markerCoordinates, setMarkerCoordinates] = useState({
    lat: 0,
    lng: 0,
  })

  /*
    Attach to GeoJson shape for tractShape
  */
  let tractRef = useRef();
   
  /**
   * Component that will capture events from the map and save the
   * state of the zoom, center, and checked values for layers for
   * when MapLeaflet remounts.
   */
  const CaptureMapState = () => {
    // Zoom and pan to Census Tract bounds
    let map = useMap();

    // Captures map zoom and center and saves them to state
    const captureZoomCenter = useMapEvent("moveend", () => {
      setMapData({
        ...mapData,
        zoom: captureZoomCenter.getZoom(),
        center: captureZoomCenter.getCenter(),
      });
    });

    // Captures when overlays are removed via the layers control
    useMapEvent("overlayremove", (e) => {
      setMapData({
        ...mapData,
        displayLayer: {
          ...displayLayer,
          [e.name]: false,
        },
      });
    });

    // Captures when overlays are added via the layers control
    useMapEvent("overlayadd", (e) => {
      setMapData({
        ...mapData,
        displayLayer: {
          ...displayLayer,
          [e.name]: true,
        },
      });
    });

    /**
     * Get coordinate of marker clicked
     */
    useMapEvent('popupopen', () => {
      map.panTo([markerCoordinates.lat, markerCoordinates.lng])
    });

    useEffect(() => {
      let copyTractRef = tractRef.current;
      if (copyTractRef && defaultTab) {
        // If HUD is at twoThirdsScreen
        if (HUDPosition === "67vh") {
          map.flyToBounds(copyTractRef.getBounds(), {
            paddingBottomRight: [0, 550],
            maxZoom: 14,
          });
        }
        // If HUD is at oneThirdScreen
        else {
          map.flyToBounds(copyTractRef.getBounds(), {
            paddingBottomRight: [0, 300],
            maxZoom: 14,
          });
        }
      }
    });
    return null;
  };


  /**
   * Renders property markers with address popups
   */
  const renderMarkers = properties.map((property) => (
    <Marker
      key={property.address.streetAddress}
      eventHandlers={{
        click: (e) => {
          let markerCenter = e.target.getLatLng();
//          map.panTo(e.target.getLatLng());
          setMarkerCoordinates({
            lat: e.target.getLatLng().lat,
            lng: markerCenter.lng
          });
          console.log(markerCenter.lat)
          console.log(markerCoordinates.lat)
        }
      }}
      position={[property.latitude, property.longitude]}>
      <Popup>
        <span>{property.address.streetAddress},</span> <br />
        <span>
          {property.address.city}, {property.address.state + " "}
        </span>
        <span>{property.address.zipcode}</span>
      </Popup>
    </Marker>
  ));

  return (
    <div tabIndex='9'>
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
          zoomOffset={-1}
          tileSize={512}
        />

        {Object.keys(msaShape).length && (
          <LayersControl position='topright'>
            <LayersControl.Overlay
              checked={mapData.displayLayer["MSA shape"]}
              name='MSA shape'>
              {Object.keys(msaShape).length && (
                <GeoJSON data={msaShape} style={{ color: "red" }} />
              )}
            </LayersControl.Overlay>
            <LayersControl.Overlay
              checked={mapData.displayLayer["Place shape"]}
              name='Place shape'>
              {Object.keys(placeShape).length && (
                <GeoJSON data={placeShape} style={{ color: "green" }} />
              )}
            </LayersControl.Overlay>
            <LayersControl.Overlay
              checked={mapData.displayLayer["CT shape"]}
              name='CT shape'>
              {Object.keys(tractShape).length && (
                <GeoJSON ref={tractRef} data={tractShape} style={{ color: "blue" }} />
              )}
            </LayersControl.Overlay>
            <LayersControl.Overlay
              checked={mapData.displayLayer["Property markers"]}
              name='Property markers'>
              {properties.length && <LayerGroup>{renderMarkers}</LayerGroup>}
            </LayersControl.Overlay>
          </LayersControl>
        )}

        <CaptureMapState />
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
