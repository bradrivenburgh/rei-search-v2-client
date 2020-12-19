import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Image from './Image';

test('renders SavedProps', () => {
  render(<BrowserRouter><Image /></BrowserRouter>);
});
