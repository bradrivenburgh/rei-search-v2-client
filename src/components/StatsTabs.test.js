import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "../Context";
import { sampleSearchResponse } from "../mockData";
import StatsTabs from "./StatsTabs";

const { economic, demographic } = sampleSearchResponse.apiStatistics;

const contextValues = {
  searchResults: {
    statistics: { economic, demographic },
  },
};

describe("StatsTabs", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <StatsTabs />
      </BrowserRouter>
    );
  });

  test("displays economics-related headings and data if it receives an id of 'economics'", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <StatsTabs id='economics' />
        </Context.Provider>
      </BrowserRouter>
    );

    const headings = screen.getAllByRole("heading");
    const headingsText = headings.map((heading) => heading.textContent);
    expect(headingsText).toEqual([
      "Economics",
      "Price-to-rent ratio",
      "Rental vacancy rate",
      "Median household income",
      "Top three sectors",
      "Top three occupations",
    ]);
  });

  test("displays demographics-related headings and data if it receives an id of 'demographics'", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <StatsTabs id='demographics' />
        </Context.Provider>
      </BrowserRouter>
    );

    const headings = screen.getAllByRole("heading");
    const headingsText = headings.map((heading) => heading.textContent);
    expect(headingsText).toEqual([
      "Demographics",
      "Population growth rate",
      "Median age",
      "Race and ethnicity",
      "Unemployment rate",
    ]);
  });

  test("demographics tables have headers for Census Tract, County, and MSA geographies", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <StatsTabs id='demographics' />
        </Context.Provider>
      </BrowserRouter>
    );

    const tables = screen.getAllByRole("table");
    tables.forEach((table) => {
      expect(table).toHaveTextContent("CT");
      expect(table).toHaveTextContent("CTY");
      expect(table).toHaveTextContent("MSA");
    });
  });

  test("economics tables have headers for Census Tract, County, and MSA geographies", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <StatsTabs id='economics' />
        </Context.Provider>
      </BrowserRouter>
    );

    const tables = screen.getAllByRole("table");
    tables.forEach((table) => {
      expect(table).toHaveTextContent("CT");
      expect(table).toHaveTextContent("CTY");
      expect(table).toHaveTextContent("MSA");
    });
  });
});
