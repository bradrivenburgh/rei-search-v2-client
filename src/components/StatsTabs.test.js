import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StatsTabs from './StatsTabs';

test('renders StatsTabs', () => {
  render(<BrowserRouter><StatsTabs /></BrowserRouter>);
});
