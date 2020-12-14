import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import ValidationError from './ValidationError';

describe('ValidationError', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><ValidationError /></BrowserRouter>)
  })
});