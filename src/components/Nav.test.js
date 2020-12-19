import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Nav", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
  });
});
