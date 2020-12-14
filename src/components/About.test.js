import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

describe('AccountChild', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><About /></BrowserRouter>)
  });
});