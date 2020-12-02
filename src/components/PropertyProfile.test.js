import React, {useState} from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {savedProps, fakeProps} from '../mockData';
import PropertyProfile from './PropertyProfile';

function PropertyProfileTestComponent() {
  let [properties] = useState(fakeProps);
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

  return (
    <BrowserRouter>
      <PropertyProfile
        currentProperty={currentProperty}
        savedProperties={savedProperties}
        onAddRemoveProperty={handleAddRemoveProperty}
      />
    </BrowserRouter>
  );
}

describe('PropertyProfile', () => {
  test('renders PropertyProfile', () => {
    render(<PropertyProfileTestComponent />);
  });  
});

