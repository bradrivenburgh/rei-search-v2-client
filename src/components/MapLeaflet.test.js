import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { fakeProps } from '../mockData';
import MapLeaflet from './MapLeaflet';

const mapState = {
  mapData: {
    lat: 39.9,
    lng: -75.16,
    zoom: 9,
    center: [39.9, -75.16],
    msaShape: {},
    placeShape: {},
    tractShape: {},
    displayLayer: {
      "Property markers": true,
      "MSA shape": true,
      "Place shape": true,
      "CT shape": true
    } 
  },
  setMapData: () => {}
}

describe("MapLeaflet", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <MapLeaflet
          mapState={mapState}
          defaultTab={{ defaultTab: false }}
          properties={fakeProps}
        />
      </BrowserRouter>
    );
  });
});
