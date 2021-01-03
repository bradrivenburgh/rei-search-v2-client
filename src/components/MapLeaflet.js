import React, { useEffect, useRef } from "react";
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
  mapState: { mapData, setMapData, currentMarkerLatLng, findMarker },
  properties,
  defaultTab,
  HUDState: {
    HUDPosition,
    activeTab,
    setHUDPosition,
    setActiveTab,
    setPressCount,
  },
}) {
  /* State from App */
  let {
    zoom,
    center,
    msaShape,
    countyShape,
    tractShape,
    displayLayer,
  } = mapData;

  /*
    Attach to GeoJson shape for tractShape
  */
  const markerRefs = useRef([]);
  markerRefs.current = [];

  const handleOpenPropTab = () => {
    if (!activeTab.propsTab) {
      setActiveTab({
        econTab: null,
        demogTab: null,
        propsTab: true,
      });
    }
    if (HUDPosition === "69px") {
      setHUDPosition("38%");
      setPressCount(1);
    }
  };

  const addToRefs = (el) => {
    if (el && !markerRefs.current.includes(el)) {
      markerRefs.current.push(el);
    }
  };

  /**
   * Renders property markers with address popups
   */
  const renderMarkers = properties.map((property) => (
    <Marker
      key={property.address.streetAddress}
      position={[property.latitude, property.longitude]}
      ref={addToRefs}>
      <Popup keepInView={false} autoPan={false}>
        <a
          href={`#${property.address.streetAddress}`}
          onClick={() => handleOpenPropTab()}>
          <span>{property.address.streetAddress},</span> <br />
          <span>
            {property.address.city}, {property.address.state + " "}
          </span>
          <span>{property.address.zipcode}</span>
        </a>
      </Popup>
    </Marker>
  ));

  /**
   * Create references to county and tract geoJson shapes
   */
  let countyRef = useRef();
  let tractRef = useRef();

  /**
   * clears Leaflet layer from DOM node holding geoJson shape;
   * uses Leaflet's addData method to refresh the data and add
   * the new shapes
   */
  useEffect(() => {
    if (countyRef.current && tractRef.current) {
      countyRef.current.clearLayers().addData(countyShape);
      tractRef.current.clearLayers().addData(tractShape);
    }
}, [countyShape, tractShape]);

  /**
   * Component that will capture events from the map and save the
   * state of the zoom, center, and checked values for layers for
   * when MapLeaflet remounts.
   */
  const ManageMapState = () => {
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

    useEffect(() => {
      let paddingOffset;
      if (tractShape && defaultTab) {
        // If HUD is at twoThirdsScreen
        if (HUDPosition === "67%") {
          if (window.innerHeight <= 400) {
            paddingOffset = 600;
          } else if (window.innerHeight > 400 && window.innerHeight <= 600) {
            paddingOffset = 425;
          } else if (window.innerHeight > 600 && window.innerHeight <= 700) {
            paddingOffset = 500;
          } else if (window.innerHeight > 700 && window.innerHeight <= 900) {
            paddingOffset = 560;
          } else if (window.innerHeight > 900) {
            paddingOffset = 750;
          }
        }
        // If HUD is at oneThirdScreen
        else {
          paddingOffset = 300;
        }
        map.closePopup();
        const tractBounds = [
          [tractShape.features[0].geometry.bbox[1], tractShape.features[0].geometry.bbox[0]],
          [tractShape.features[0].geometry.bbox[3], tractShape.features[0].geometry.bbox[2]]
        ]
        map.flyToBounds(tractBounds, {
          paddingBottomRight: [0, paddingOffset],
          maxZoom: 14,
          duration: 0.5,
        });
      }
    });

    /**
     * When the use clicks the findMarker button in the HUD this effect
     * centers the map on the corresponding marker and opens its popup.
     */
    useEffect(() => {
      if (findMarker) {
        let paddingOffset;

        // Offsets for map center to accommodate HUD
        if (HUDPosition === "67%") {
          if (window.innerHeight <= 600) {
            paddingOffset = 324;
          } else if (window.innerHeight > 600 && window.innerHeight <= 700) {
            paddingOffset = 399;
          } else if (window.innerHeight > 700 && window.innerHeight <= 900) {
            paddingOffset = 450;
          } else {
            paddingOffset = 600;
          }
        } else {
          paddingOffset = 100;
        }
        // Close all popups that will prevent map panning
        map.closePopup();

        // Pan to the marker with the specified padding offset
        map.fitBounds(
          [currentMarkerLatLng.current, currentMarkerLatLng.current],
          {
            paddingBottomRight: [0, paddingOffset],
            duration: 0.25,
          }
        );

        // Find the markerRef with the same latitude as property and fire a click
        const foundMarker = markerRefs.current.find(
          (marker) => marker._latlng.lat === currentMarkerLatLng.current[0]
        );
        foundMarker.fire("click");
      }
    });
    return null;
  };


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
              checked={mapData.displayLayer["County shape"]}
              name='County shape'>
              {Object.keys(countyShape).length &&                
                <GeoJSON ref={countyRef} data={countyShape} style={{color: 'green'}} />
              }
            </LayersControl.Overlay>
            <LayersControl.Overlay
              checked={mapData.displayLayer["CT shape"]}
              name='CT shape'>
              {Object.keys(tractShape).length && (
                <GeoJSON ref={tractRef} data={tractShape} style={{color: 'blue'}} />
              )}
            </LayersControl.Overlay>
            <LayersControl.Overlay
              checked={mapData.displayLayer["Property markers"]}
              name='Property markers'>
              {properties.length && <LayerGroup>{renderMarkers}</LayerGroup>}
            </LayersControl.Overlay>
          </LayersControl>
        )}

        <ManageMapState />
      </MapContainer>
    </div>
  );
}

export default MapLeaflet;

MapLeaflet.defaultProps = {
  mapState: {
    mapData: {
      lat: 39.9,
      lng: -75.16,
      zoom: 9,
      center: [39.9, -75.16],
      msaShape: {},
      countyShape: {},
      tractShape: {},
      displayLayer: {
        "Property markers": true,
        "MSA shape": true,
        "County shape": true,
        "CT shape": true,
      },
      findMarker: false,
      setMapData: () => {},
      setCurrentMarkerLatLng: () => {},
    },
  },
  properties: [
    {
      address: {
        streetAddress: "Placeholder St.",
        city: "Somewhere",
        state: "PA",
        zipcode: "00000",
        neighborhood: null,
        community: null,
        subdivision: null,
      },
      bedrooms: "2",
      bathrooms: "2",
      price: "200000",
      yearBuilt: 1980,
      longitude: -75.10820770263672,
      latitude: 39.98884201049805,
      description: "Placeholder description.",
      livingArea: 1000,
      currency: "USD",
      photos: [],
    },
  ],
  defaultTab: false,
  HUDState: {
    HUDPosition: "67%",
    activeTab: false,
    setHUDPosition: () => {},
    setActiveTab: () => {},
    setPressCount: () => {},
  },
};
