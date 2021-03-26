import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import About from "./About";

describe("About", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  });

  test("displays about modal on first visit", () => {
    render(
      <BrowserRouter>
        <About
          aboutState={{ visited: "false", handleAddAboutVisited: jest.fn() }}
        />
      </BrowserRouter>
    );

    const pageTitle = screen.getByRole("heading", { name: "rei-search" });
    expect(pageTitle).toBeInTheDocument();
  });

  test("function to close modal is called after clicking 'X' button", async () => {
    let visited = "false";
    const closeModal = jest.fn(() => {
      visited = "true";
    });

    render(
      <BrowserRouter>
        <About
          aboutState={{ visited: visited, handleAddAboutVisited: closeModal }}
        />
      </BrowserRouter>
    );

    const closeButton = screen.getByRole("button", { name: "X" });
    userEvent.click(closeButton);

    // check to make sure handler that hides the About modal has been called
    expect(closeModal).toHaveBeenCalledTimes(1);
    expect(visited).toBe("true");
  });

  test("all four images loaded properly", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    const allImages = screen.getAllByRole("img");
    expect(allImages).toHaveLength(4);

    const allImagesAltText = allImages.map((img) => img.alt);
    expect(allImagesAltText).toEqual([
      "screenshot of econ tab selected in dashboard",
      "screenshot of properties tab and map with icons",
      "screenshot of property profile",
      "screenshot of saved properties",
    ]);
  });
});
