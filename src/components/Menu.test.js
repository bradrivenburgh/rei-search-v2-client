import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

test('renders Menu', () => {
  render(<BrowserRouter><Menu /></BrowserRouter>);
});
