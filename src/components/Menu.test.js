import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

describe("Menu", () => {
  test("renders Menu to the DOM", () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );
  });

  test("renders with button to close and two links", () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );

    const closeButton = screen.getByRole("button", { name: "☰" });
    const aboutLink = screen.getByRole("link", { name: "About" });
    const savedPropsLink = screen.getByRole("link", {
      name: /saved properties/i,
    });
    expect(closeButton).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(savedPropsLink).toBeInTheDocument();
  });

  test("clicking button calls function close menu", () => {
    const closeMenuFnc = jest.fn();
    render(
      <BrowserRouter>
        <Menu
          menuState={{
            setMenuState: closeMenuFnc,
            handleAddAboutVisited: () => {},
            menuState: {
              menuOffset: "0px",
              menuVisibility: "visible",
            },
          }}
        />
      </BrowserRouter>
    );

    const closeButton = screen.getByRole("button", { name: "☰" });

    // Click the button to close Menu
    userEvent.click(closeButton);

    // Handler to close menu has been called
    expect(closeMenuFnc).toHaveBeenCalledTimes(1);
  });
});
