import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MapLeaflet from './MapLeaflet';

test('renders Map', () => {
  render(<BrowserRouter><MapLeaflet /></BrowserRouter>);
});
