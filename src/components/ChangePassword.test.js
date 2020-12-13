import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ChangePassword from './ChangePassword';

describe('ChangePassword', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><ChangePassword /></BrowserRouter>)
  });
});