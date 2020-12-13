import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AccountChild from './AccountChild';

describe('AccountChild', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><AccountChild /></BrowserRouter>)
  });
});