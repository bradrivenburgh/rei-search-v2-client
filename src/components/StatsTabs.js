import React, { useContext } from "react";
import { Context } from "../Context";

function StatsTabs({ id }) {
  const {
    stats: { economic = [] },
    stats: { demographic = [] },
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
    if (typeof value === 'object') {
      let list = value.map((item, index) => <li key={index}>{item}</li>);
      return <ul>{list}</ul>
    } else {
      return value;
    }
  };

  /**
   * Create list items containing stat tables
   * @param {array} data 
   */
  const renderTable = (data) => {
    return data.map((entry) => {
      const { id, statistic, CT, MSA, USA } = entry;
      return (
        <li key={id}>
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
                <td>{renderValue(MSA)}</td>
                <td>{renderValue(USA)}</td>
              </tr>
            </tbody>
          </table>
        </li>
      );
    });
  };

  return (
    <>
      {id === 'economics'
        ? <>
            <h3>Economics</h3>
            <ul>{renderTable(economic)}</ul>
          </>
        : <>
            <h3>Demographics</h3>
            <ul>{renderTable(demographic)}</ul>
          </>
      }
    </>
  );
}

StatsTabs.defaultProps = {
  id: '',
}

export default StatsTabs;