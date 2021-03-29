import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "../Context";
import { fakeProps, savedProps } from "../mockData";
import PropertiesTab from "./PropertiesTab";

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

  test("contains a pressed and unpressed favorites button", () => {
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
      pressed: true,
    });

    expect(unpressedButton[0]).toBeInTheDocument();
    expect(pressedButton[0]).toBeInTheDocument();
  });

  test("each entry contains an image, property info, and favorite and locate buttons", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <PropertiesTab />
        </Context.Provider>
      </BrowserRouter>
    );

    const propertyImages = screen.getAllByRole("img");
    const propertyInfo = document.querySelectorAll(".properties-info");
    const allButtons = screen.getAllByRole("button");
    expect(propertyImages.length).toEqual(propertyInfo.length);
    expect(propertyImages.length).toEqual(allButtons.length / 2);
  });
});
