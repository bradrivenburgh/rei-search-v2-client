import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SavedProps from './SavedProps';

test('renders SavedProps', () => {
  render(<BrowserRouter><SavedProps /></BrowserRouter>);
});
