import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditEmail from './EditEmail';

describe('EditEmail', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><EditEmail /></BrowserRouter>)
  })
})