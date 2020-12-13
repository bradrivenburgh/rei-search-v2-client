import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DeleteAccount from './DeleteAccount';

describe('DeleteAccount', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><DeleteAccount /></BrowserRouter>)
  });
});