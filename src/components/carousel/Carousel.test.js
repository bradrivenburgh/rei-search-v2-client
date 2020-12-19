import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Carousel from './Carousel';

describe('About', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><Carousel /></BrowserRouter>)
  });
});