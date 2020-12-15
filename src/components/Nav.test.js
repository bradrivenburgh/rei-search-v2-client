import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

let menuState = {
  menuState: {
    setMenuState: () => {}
  }
}

describe('Nav', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><Nav menuState={menuState}></Nav></BrowserRouter>)
  });
}); 