import React, { useState } from "react";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "../Context";
import { fakeProps, savedProps } from "../mockData";
import PropertiesTab from "./PropertiesTab";

function PropertiesTabTestComponent() {
  let [properties, setProperties] = useState(fakeProps);
  let [savedProperties, setSavedProperties] = useState(savedProps);
  let [currentProperty, setCurrentProperty] = useState({
    propertyData: properties[0],
    inSavedProperties: false,
  });

  const handleAddRemoveProperty = (
    inSavedProps = false,
    prop = {},
    savedProps = []
  ) => {
    let newSavedProps;
    // Remove prop from savedProps
    if (inSavedProps) {
      newSavedProps = savedProps.filter((savedProp) => {
        return savedProp.address.streetAddress !== prop.address.streetAddress;
      });
      inSavedProps = false;
    }
    // Add prop to savedProps
    else {
      inSavedProps = true;
      newSavedProps = [...savedProps, prop];
    }
    setCurrentProperty({ ...currentProperty, inSavedProperties: inSavedProps });
    setSavedProperties(newSavedProps);
  };

  let searchResults = {
    properties,
    setProperties,
  };

  const contextValues = {
    searchResults,
    savedProperties,
    setSavedProperties,
    currentProperty,
    setCurrentProperty,
    handleAddRemoveProperty,
  };

  return (
    <Context.Provider value={contextValues}>
      <BrowserRouter>
        <PropertiesTab />
      </BrowserRouter>
    </Context.Provider>
  );
}

afterAll(cleanup);

describe("PropertiesTab", () => {
  test("renders to the DOM", () => {
    render(<PropertiesTabTestComponent />);
  });

  test('contains an "Properties" heading', () => {
    render(<PropertiesTabTestComponent />);
    expect(
      screen.getByRole("heading", { name: /properties/i })
    ).toBeInTheDocument();
  });

  test("pressing Add/Remove button toggles aria-pressed value", () => {
    render(<PropertiesTabTestComponent />);

    const unpressedBtnsBefore = screen.getAllByRole("button", {
      pressed: false,
    });
    fireEvent.click(unpressedBtnsBefore[0]);
    const unpressedBtnsAfter = screen.getAllByRole("button", {
      pressed: false,
    });
    expect(unpressedBtnsAfter.length).toBeLessThan(unpressedBtnsBefore.length);
  });
});
