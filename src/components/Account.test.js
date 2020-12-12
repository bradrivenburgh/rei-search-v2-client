import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Account from './Account';

describe('Account', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><Account /></BrowserRouter>)
  });
});