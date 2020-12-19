import {BrowserRouter} from 'react-router-dom';
import { render } from '@testing-library/react';
import StatsTabs from './StatsTabs';

describe('StatsTabs', () => {
  test("renders to the DOM", () => {
    render(<BrowserRouter><StatsTabs /></BrowserRouter>);
  });
});
