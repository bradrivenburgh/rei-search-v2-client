import React, {useState} from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

function NavTestComponent() {
  /* Menu State */
  let [menuOffset, setMenuOffset] = useState("-250px");

  return(
    <BrowserRouter>
      <Nav setMenuOffset={ setMenuOffset } />
    </BrowserRouter>
  );
}

test('renders Nav', () => {
  render(<NavTestComponent />);
});
