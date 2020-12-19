import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HUD from './HUD';

describe("HUD", () => {
  test("renders HUD", () => {
    render(<BrowserRouter><HUD /></BrowserRouter>);
  });
});
