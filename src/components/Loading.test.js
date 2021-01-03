import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Loading from './Loading';

describe("Loading", () => {
  test("renders to the DOM", () => {
    render(<BrowserRouter><Loading /></BrowserRouter>);
  });
});
