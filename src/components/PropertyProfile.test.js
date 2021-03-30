import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import PropertyProfile from "./PropertyProfile";

describe("PropertyProfile", () => {
  test("renders PropertyProfile", () => {
    render(
      <BrowserRouter>
        <PropertyProfile />
      </BrowserRouter>
    );
  });

  test("contains a heading 'Property Profile'", () => {
    render(
      <BrowserRouter>
        <PropertyProfile />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading", { name: /property profile/i });
    expect(heading).toBeInTheDocument();
  });

  test("expect button 'X' to render", () => {
    render(
      <BrowserRouter>
        <PropertyProfile />
      </BrowserRouter>
    );

    const closeButton = screen.getByRole("button", { name: "X" });
  });

  test("renders an image carousel", () => {
    render(
      <BrowserRouter>
        <PropertyProfile />
      </BrowserRouter>
    );

    const carousel = screen.getByRole("img").closest("section");
    expect(carousel).toHaveClass("carousel");
    expect(carousel).toBeInTheDocument();
  });

  test("renders the price and address", () => {
    render(
      <BrowserRouter>
        <PropertyProfile />
      </BrowserRouter>
    );

    const price = screen.getByText("$", { exact: false });
    const address = document.querySelector(".property-profile__address");
    expect(price).toBeInTheDocument();
    expect(address).toBeInTheDocument();
  });

  test("renders and a favorite button", () => {
    render(
      <BrowserRouter>
        <PropertyProfile />
      </BrowserRouter>
    );

    const favoritesBtn = screen.getByTitle("favorite");
    expect(favoritesBtn).toBeInTheDocument();
  });

  test("renders basic facts section", () => {
    render(
      <BrowserRouter>
        <PropertyProfile />
      </BrowserRouter>
    );

    const basicFacts = screen
      .getByRole("heading", { name: /basic facts/i })
      .closest("div");
    expect(basicFacts).toHaveTextContent("bed");
    expect(basicFacts).toHaveTextContent("bath");
    expect(basicFacts).toHaveTextContent("sqft");
    expect(basicFacts).toHaveTextContent("built");
  });

  test("includes a description of the property", () => {
    render(
      <BrowserRouter>
        <PropertyProfile />
      </BrowserRouter>
    );

    const description = screen
      .getByRole("heading", { name: /description/i })
      .closest("div");
    expect(description).toHaveTextContent("Description");
    expect(description.getElementsByTagName("p")[0]).toHaveTextContent(
      /placeholder description/i
    );
  });
});
