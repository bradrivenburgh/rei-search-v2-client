import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

describe('Menu', () => {
  test('renders Menu to the DOM', () => {
    render(<BrowserRouter><Menu  /></BrowserRouter>);
  });  
});

