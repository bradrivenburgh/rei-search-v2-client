import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import BadSearch from "./BadSearch";

describe("Bad Search", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <BadSearch />
      </BrowserRouter>
    );
  });

  test("does not display by default", () => {
    render(
      <BrowserRouter>
        <BadSearch />
      </BrowserRouter>
    );
    const modalTitle = screen.queryByRole("heading", { name: /whoops/i });
    expect(modalTitle).not.toBeInTheDocument();
  });

  test("displays correctly when there is a bad search", () => {
    render(
      <BrowserRouter>
        <BadSearch badSearchState={{ badSearch: true }} />
      </BrowserRouter>
    );
    const modalTitle = screen.getByRole("heading", { name: /whoops/i });
    expect(modalTitle).toBeInTheDocument();

    const message = screen.getByText("The location you entered", {
      exact: false,
    });
    expect(message).toBeInTheDocument();
  });

  test("modal closes when 'X' button is clicked", () => {
    let badSearch = true;
    const closeFunc = jest.fn(() => (badSearch = false));

    const { rerender } = render(
      <BrowserRouter>
        <BadSearch
          badSearchState={{ badSearch: badSearch, setBadSearch: closeFunc }}
        />
      </BrowserRouter>
    );

    const closeButton = screen.getByRole("button", { name: "X" });
    userEvent.click(closeButton);
    expect(closeFunc).toHaveBeenCalledTimes(1);
    expect(badSearch).toEqual(false);

    rerender(
      <BrowserRouter>
        <BadSearch
          badSearchState={{ badSearch: badSearch, setBadSearch: closeFunc }}
        />
      </BrowserRouter>
    );

    const modalTitle = screen.queryByRole("heading", { name: /whoops/i });
    expect(modalTitle).not.toBeInTheDocument();
  });
});
