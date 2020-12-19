import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SavedProps from './SavedProps';

describe('SavedProps', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><SavedProps /></BrowserRouter>);
  });
});
