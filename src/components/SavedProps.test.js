import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import SavedProps from "./SavedProps";

describe("SavedProps", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <SavedProps />
      </BrowserRouter>
    );
  });

  test("renders the 'Saved Properties' heading", () => {
    render(
      <BrowserRouter>
        <SavedProps />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading", { name: /saved properties/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders favorite button for each entry", () => {
    render(
      <BrowserRouter>
        <SavedProps />
      </BrowserRouter>
    );

    // all favorites button should be 'pressed' and there should be an equal
    // number to the number of property images.
    const favoriteButtons = screen.getAllByRole("button", { pressed: true });
    const propertyImgs = screen.getAllByRole("img");
    expect(favoriteButtons.length).toEqual(propertyImgs.length);
  });

  test("each entry contains an image, property info, and favorite button", () => {
    render(
      <BrowserRouter>
        <SavedProps />
      </BrowserRouter>
    );

    const favoriteButtons = screen.getAllByRole("button", { pressed: true });
    const propertyImgs = screen.getAllByRole("img");
    const propertyInfo = document.querySelectorAll(".saved-properties-info");
    expect(favoriteButtons.length).toEqual(propertyImgs.length);
    expect(favoriteButtons.length).toEqual(propertyInfo.length);
  });

  test("pressing the favorite button calls the onAddRemoveProperty handler", () => {
    const onAddRemoveProperty = jest.fn();

    render(
      <BrowserRouter>
        <SavedProps onAddRemoveProperty={onAddRemoveProperty} />
      </BrowserRouter>
    );

    const favoriteButtons = screen.getAllByRole("button", { pressed: true });
    userEvent.click(favoriteButtons[0]);
    expect(onAddRemoveProperty).toHaveBeenCalledTimes(1);
  });
});
