import React from 'react'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../Context';
import { contextValues } from '../mockData';
import PropertiesTab from './PropertiesTab';

describe("PropertiesTab", () => {
  test('renders to the DOM', () => {
    render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <PropertiesTab />
        </Context.Provider>
      </BrowserRouter>);
  });
    
  test('contains an "Properties" heading', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <PropertiesTab />
        </Context.Provider>
      </BrowserRouter>);

    expect(getByRole("heading", { name: /properties/i })).toBeInTheDocument();
  });

  test('contains a button with addRemove-button class', () => {
    const { getByRole, getByLabelText } = render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <PropertiesTab />
        </Context.Provider>
      </BrowserRouter>); 
    expect(screen.getByLabelText(/false/i)).toBeInTheDocument();
  });

});