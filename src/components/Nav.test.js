import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

test('renders Nav', () => {
  render(<BrowserRouter><Nav /></BrowserRouter>);
});
