import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HUD from './HUD';

const HUDState = {
  pressCount: 0,
  setPressCount: () => {},
  HUDPosition: '',
  setHUDPosition: () => {},
  activeTab: '',
  setActiveTab: () => {},
};


test('renders HUD', () => {
  render(<BrowserRouter><HUD HUDState={HUDState} /></BrowserRouter>);
});
