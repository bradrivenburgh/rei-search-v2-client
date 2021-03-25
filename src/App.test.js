import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("renders to the DOM", () => {
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

    const closeButton = screen.getByRole("button", { name: "X" });
    userEvent.click(closeButton);

    const hiddenCloseButton = screen.queryByRole("button", { name: "X" });
    expect(hiddenCloseButton).not.toBeInTheDocument();
  });
});
