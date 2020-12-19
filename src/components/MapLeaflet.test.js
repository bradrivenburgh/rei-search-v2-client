import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MapLeaflet from './MapLeaflet';

describe("MapLeaflet", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <MapLeaflet />
      </BrowserRouter>
    );
  });
});
