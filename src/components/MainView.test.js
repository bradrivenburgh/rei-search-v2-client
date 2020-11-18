import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainView from './MainView';

test('renders MainView', () => {
  render(<BrowserRouter><MainView /></BrowserRouter>);
});
