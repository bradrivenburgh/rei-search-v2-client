import React, {useState} from 'react';
import {Context} from '../Context';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Search from './Search';

function SearchTestComponent() {
  let [defaultTab, setDefaultTab] = useState(false);
  return (
    <Context.Provider value={{defaultTab, setDefaultTab}} >
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    </Context.Provider>
  )
}

describe('Search', () => {
  test('renders to the DOM', () => {
    render(<SearchTestComponent />);
  });
});

