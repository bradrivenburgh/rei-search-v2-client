import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Search from './Search';

test('renders Search', () => {
  render(<BrowserRouter><Search /></BrowserRouter>);
});
