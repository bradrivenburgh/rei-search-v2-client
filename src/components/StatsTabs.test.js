import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import { render } from '@testing-library/react';
import {Context} from '../Context';
import {fakeStats} from '../mockData';
import StatsTabs from './StatsTabs';

const id = "economics";

function StatsTabsTestWrapper({id}) {
  /* Data from API */
  let [statistics, setStatistics] = useState(fakeStats);
  let searchResults = {
    statistics,
    setStatistics,
  };
  const contextValues = {
    searchResults,
  };

  return(
  <Context.Provider value={contextValues}>
    <BrowserRouter>
      <StatsTabs id={id} />
    </BrowserRouter>
  </Context.Provider>
  );
}


describe('StatsTabs', () => {
  test("renders StatsTabs", () => {
    render(<StatsTabsTestWrapper id={id} />);
  });
});
