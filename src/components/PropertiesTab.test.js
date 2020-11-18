import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertiesTab from './PropertiesTab';

test('renders PropertiesTab', () => {
  render(<BrowserRouter><PropertiesTab /></BrowserRouter>);
});
