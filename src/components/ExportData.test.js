import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ExportData from './ExportData';

describe('ExportData', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><ExportData /></BrowserRouter>)
  });
});