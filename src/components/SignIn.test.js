import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './SignIn';

describe('SignIn', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><SignIn /></BrowserRouter>)
  })
})