import React, { useContext } from "react";
import { Context } from "../Context";

function StatsTabs({ id }) {
  const {
    stats: { economic = [] },
    stats: { demographic = [] },
  } = useContext(Context);

  const renderTableHeaders = (data) => {
    let keys = Object.keys(data[0]);
    let header = keys.slice(3);
    return header.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  /** TO DO: Examine this function with Robert to figure out why this won't map a
   * list. The current implementation is basically hardcoded!
   */
  const renderValue = (value) => {
    if (typeof value === "object") {
      return (
        <ul>
          <li>{value[0]}</li>
          <li>{value[1]}</li>
          <li>{value[2]}</li>
        </ul>
      );
    } else {
      return value;
    }

    // if (typeof value === 'object') {
    //   // let list = value.map((item, index) => <li key={index}>{item}</li>;
    //   return (
    //   <ul>
    //     value.map((item, index) => <li key={index}>{item}</li>
    //   </ul>
    //   );

    // } else {
    //   return value;
    // }
  };

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