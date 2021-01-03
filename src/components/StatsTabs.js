import React, { useContext } from "react";
import { Context } from "../Context";
import './StatsTabs.css';

function StatsTabs({ id }) {
  
  // Need to deconstruct statsTemplate: {economic = [], demographic = []}
  // Need to deconstruct statistics: { apiStatistics: { msaStats = {}, countyStats = {}, tractStats = {} } }
  const {
    searchResults: {
      statistics: { economic = [], demographic = [] },
    },
  } = useContext(Context);

  /**
   * Make keys into column headers; remove
   * properties that should not be headers
   * @param {array} data;
   */
  const renderTableHeaders = (data) => {
    let keys = Object.keys(data[0]);
    let header = keys.slice(3);
    return header.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  /**
   * Return string or list depending on value
   * @param {string || array} value
   */
  const renderValue = (value) => {
    if (typeof value === "object") {
      let list = value.map((item, index) => <li key={index}>{item}</li>);
      return <ul className='stats__table-list'>{list}</ul>;
    } else {
      return value;
    }
  };

  /**
   * Create list items containing stat tables
   * @param {array} data
   */
  const renderTable = (data) => {
    return data.map((entry, index) => {
      const { statistic, CT, CTY, MSA } = entry;
      return (
        <li key={index}>
          <h4>{statistic}</h4>
          {entry.advisory && (
            <p>
              <em>{entry.advisory}</em>
            </p>
          )}
          <table>
            <thead>
              <tr>{renderTableHeaders(data)}</tr>
            </thead>
            <tbody>
              <tr>
                <td>{renderValue(CT)}</td>
                <td>{renderValue(CTY)}</td>
                <td>{renderValue(MSA)}</td>
              </tr>
            </tbody>
          </table>
        </li>
      );
    });
  };

  return (
    <>
      {id === "economics" ? (
        <>
          {economic.length ? (
            <>
              <h3>Economics</h3>
              <ul className='stats'>{renderTable(economic)}</ul>
            </>
          ) : (
            <p>Please conduct a search to retrieve economic statistics.</p>
          )}
        </>
      ) : (
        <>
          {demographic.length ? (
            <>
              <h3>Demographics</h3>
              <ul className='stats'>{renderTable(demographic)}</ul>
            </>
          ) : (
            <p>Please conduct a search to retrieve demographic statistics.</p>
          )}
        </>
      )}
    </>
  );
}

StatsTabs.defaultProps = {
  id: '',
  searchResults: {
    statistics: { economic: [], demographic: [] }
  },
}

export default StatsTabs;