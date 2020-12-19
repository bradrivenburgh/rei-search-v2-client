import { Context } from "../Context";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "./Search";

describe("Search", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Context.Provider
          value={{ defaultTab: false, setDefaultTab: () => {} }}>
          <Search />
        </Context.Provider>
      </BrowserRouter>
    );
  });
});
