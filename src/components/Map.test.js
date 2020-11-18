import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Map from './Map';

test('renders Map', () => {
  render(<BrowserRouter><Map /></BrowserRouter>);
});
