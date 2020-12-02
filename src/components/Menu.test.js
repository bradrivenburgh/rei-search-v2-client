import React, {useState} from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

function MenuTestComponent() {
  /* Menu State */
  let [menuOffset, setMenuOffset] = useState("-250px");

  return(
    <BrowserRouter>
      <Menu menuOffset={{ menuOffset, setMenuOffset }} />
    </BrowserRouter>
  );
}

describe('Menu', () => {
  test('renders Menu', () => {
    render(<MenuTestComponent />);
  });  
});

