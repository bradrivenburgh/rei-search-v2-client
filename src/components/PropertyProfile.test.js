import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertyProfile from './PropertyProfile';

test('renders PropertyProfile', () => {
  render(<BrowserRouter><PropertyProfile /></BrowserRouter>);
});