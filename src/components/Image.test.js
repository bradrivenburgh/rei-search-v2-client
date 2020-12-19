import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Image from './Image';

describe('Image', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><Image /></BrowserRouter>);
  });
});