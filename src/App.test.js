import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('First visit to App', () => {
  test('renders to the DOM', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test("About modal closes after clicking 'X' button", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const closeButton = screen.getByRole('button', { name: 'X' });
    userEvent.click(closeButton);

    const hiddenCloseButton = screen.queryByRole('button', { name: 'X' });
    expect(hiddenCloseButton).not.toBeInTheDocument();
  });
});

// Assumes localStorage has "true" for "visited" variable
describe('Subsequent visits to App', () => {
  test("HUD 'expand' and 'contract' buttons change appropriately based on HUD position", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const contractBtn = screen.getByRole('button', { name: '⛶' });
    const expandBtn = screen.getByRole('button', { name: '▲' });

    userEvent.click(contractBtn);

    expect(contractBtn).toHaveTextContent('▼');
    expect(expandBtn).toHaveTextContent('_');
  });

  test('Clicking tab buttons increases HUD height when HUD is docked', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const contractBtn = screen.getByRole('button', { name: '⛶' });
    const tabControlButtons = screen.getAllByLabelText(/button/i);

    // Get HUD node
    const hudContainer = screen
      .queryByRole('button', { name: '▲' })
      .closest('section');

    // establish HUD is docked at the bottom
    expect(hudContainer).toHaveStyle({ height: '69px' });

    // click economics tab button
    userEvent.click(tabControlButtons[0]);

    // expect HUD to have increased in height to show content
    expect(hudContainer).toHaveStyle({ height: '38%' });

    // return to docked position
    userEvent.click(contractBtn);
    expect(hudContainer).toHaveStyle({ height: '69px' });

    // click demog button to expand the HUD
    userEvent.click(tabControlButtons[1]);
    expect(hudContainer).toHaveStyle({ height: '38%' });
  });

  test('Clicking menuOpen button displays menu, click menuCloseButton closes it', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Find menu open / close buttons and menu container
    const menuCloseButton = screen.getByTestId('menu-close-button');
    const menuOpenButton = screen.getByRole('button', { name: 'Menu' });
    const menu = menuCloseButton.closest('div');

    // expect menu content to be hidden and off-screen
    expect(menu).not.toBeVisible();
    expect(menu).toHaveStyle({ right: '-250px' });

    // expect that clicking menu open button will make its content visible
    // and on-screen
    userEvent.click(menuOpenButton);
    expect(menu).toBeVisible();
    expect(menu).toHaveStyle({ right: '0px' });

    // expect that clicking menu close button will hide it again
    userEvent.click(menuCloseButton);
    expect(menu).not.toBeVisible();
    expect(menu).toHaveStyle({ right: '-250px' });
  });
  test('clicking outside of the open menu closes it', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const menuOpenButton = screen.getByRole('button', { name: 'Menu' });
    const menu = screen.getByTestId('menu-close-button').closest('div');
    const HUDButton = screen.getByRole('button', { name: '⛶' });

    userEvent.click(menuOpenButton);
    expect(menu).toBeVisible();
    expect(menu).toHaveStyle({ right: '0px' });

    // expect a button on the HUD will close menu
    userEvent.click(HUDButton);
    expect(menu).not.toBeVisible();
    expect(menu).toHaveStyle({ right: '-250px' });
  });
});
