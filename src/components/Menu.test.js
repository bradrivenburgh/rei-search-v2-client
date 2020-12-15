import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

let menuState = {
  menuState: {
    menuState: {
      menuOffset: "0px",
      menuVisibility: "visible"
    },
    setMenuState: () => {}
  }
}

describe('Menu', () => {
  test('renders Menu to the DOM', () => {
    render(<BrowserRouter><Menu menuState={menuState} /></BrowserRouter>);
  });  
});

