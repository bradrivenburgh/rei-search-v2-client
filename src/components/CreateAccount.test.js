import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreateAccount from './CreateAccount';

describe('CreateAccount', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><CreateAccount /></BrowserRouter>)
  });
});