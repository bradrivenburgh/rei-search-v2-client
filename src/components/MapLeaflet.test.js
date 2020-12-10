import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { fakeProps } from '../mockData';
import MapLeaflet from './MapLeaflet';

describe('MapLeaflet', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><MapLeaflet properties={fakeProps} /></BrowserRouter>);
  });
})
