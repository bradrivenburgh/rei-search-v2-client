import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "../Context";
import { fakeProps, savedProps } from "../mockData";
import PropertiesTab from "./PropertiesTab";

afterAll(cleanup);

const contextValues = {
  searchResults: { properties: fakeProps, setProperties: () => {} },
  savedProperties: savedProps,
  setSavedProperties: () => {},
  currentProperty: {
    propertyData: fakeProps[0],
    inSavedProperties: false,
  },
  setCurrentProperty: () => {},
  handleAddRemoveProperty: () => {},
};

describe("PropertiesTab", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <PropertiesTab />
      </BrowserRouter>
    );
  });

  test('contains an "Properties" heading', () => {
    render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <PropertiesTab />
        </Context.Provider>
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", { name: /properties/i })
    ).toBeInTheDocument();
  });

  test.skip("contains a pressed and unpressed button", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <PropertiesTab />
        </Context.Provider>
      </BrowserRouter>
    );
    const unpressedButton = screen.getAllByRole("button", {
      pressed: false,
    });
    const pressedButton = screen.getAllByRole("button", {
      pressed: false,
    });

    expect(unpressedButton[0]).toBeInTheDocument();
    expect(pressedButton[0]).toBeInTheDocument();
  });
});
