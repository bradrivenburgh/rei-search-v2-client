import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BadSearch from './BadSearch';

describe('Bad Search', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><BadSearch /></BrowserRouter>)
  });
});