import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
  });  
});