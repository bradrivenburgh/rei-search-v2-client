import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Loading from "./Loading";

describe("Loading", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Loading />
      </BrowserRouter>
    );
  });

  test("does not display by default", () => {
    render(
      <BrowserRouter>
        <Loading />
      </BrowserRouter>
    );

    const loadingSpinner = screen.getByTestId("loading-spinner");
    expect(loadingSpinner).toHaveStyle({ display: "none" });
  });

  test("displays when isLoading is true", () => {
    render(
      <BrowserRouter>
        <Loading isLoading={true}/>
      </BrowserRouter>
    );

    const loadingSpinner = screen.getByTestId("loading-spinner");
    expect(loadingSpinner).toHaveStyle({ display: "block" });
  });
});
