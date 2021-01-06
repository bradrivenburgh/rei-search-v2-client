import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import {ReactComponent as HeartIcon} from '../images/heart.svg';
import {ReactComponent as LocatorIcon} from '../images/locator.svg';
import Image from "./Image";
import "./PropertiesTab.css";

function PropertiesTab() {
  const {
    searchResults: { statistics = [], properties = [] },
    savedProperties,
    setCurrentProperty,
    handleAddRemoveProperty,
    setCurrentMarkerLatLng,
    setFindMarker,
  } = useContext(Context);

  const handleFindMarker = (property) => {
    setCurrentMarkerLatLng({
      current: [property.latitude, property.longitude]
    });
    setFindMarker(true);
    setTimeout(() => {
      setFindMarker(false);
    }, 1);
  };

  const renderProperties = (data) => {
    return (
      <ul className='properties'>
        {data.map((property, index) => {
          const {
            address: { streetAddress, city, state, zipcode },
            price,
            photos,
          } = property;

          const inSavedProps = (savedProps = [], street = "") => {
            let hasProperty = false;
            if (savedProps.length) {
              hasProperty = savedProps.some((savedProp) => {
                return savedProp.address.streetAddress === street;
              });
            }
            return hasProperty;
          };

          return (
            <li
              key={index}
              className="goto"
              id={streetAddress}
              onClick={() =>
                setCurrentProperty({
                  propertyData: property,
                  inSavedProperties: inSavedProps(
                    savedProperties,
                    streetAddress
                  ),
                })
              }>
              <ul>
                <div className='properties__flex-container'>
                  <li className='properties__img-container'>
                    <Link to='/property-profile' tabIndex='6'>
                      <Image photo={photos[0]} alt={streetAddress} />
                    </Link>
                    <button
                      className={
                        inSavedProps(savedProperties, streetAddress)
                          ? "addRemove-button remove-button"
                          : "addRemove-button add-button"
                      }
                      tabIndex='6'
                      value='add-remove'
                      aria-pressed={inSavedProps(
                        savedProperties,
                        streetAddress
                      )}
                      onClick={() =>
                        handleAddRemoveProperty(
                          inSavedProps(savedProperties, streetAddress),
                          property,
                          savedProperties
                        )
                      }>
                      <HeartIcon />
                    </button>
                    <button
                      className='properties__locate-button'
                      onClick={() => handleFindMarker(property)}>
                      <LocatorIcon />
                    </button>
                  </li>
                  <div>
                    <li>
                      <p>${price}</p>
                    </li>
                    <li>
                      <p>
                        {streetAddress}, <br />
                        {city}, {state} {zipcode}
                      </p>
                    </li>
                  </div>
                </div>
                <hr />
              </ul>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {
      properties.length ? (
        <>
          <h3>Properties</h3>
          {renderProperties(properties)}
        </>
      ) : (!properties.length && statistics.economic.length)
      ? (
        <p>No properties are available. Please search another location.</p>
      ) : (
        <p>Please conduct a search to retrieve a list of properties.</p>
      )
      }
    </>
  );
}

export default PropertiesTab;
