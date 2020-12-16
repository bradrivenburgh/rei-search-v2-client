import React from 'react';
import { useHistory } from 'react-router-dom';
import './ExportData.css';

function ExportData() {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/main');
  }

  return (
    <section className='export-data'>
      <nav className='closing-nav'>
        <button onClick={() => history.goBack()}>X</button>
      </nav>
      <header>
        <h1>Export your data</h1>
      </header>

      <div>
        <p>
          Export properties saved to your <br /> account to a downloadable CSV file.
        </p>
      </div>

      <div className='export-data__buttons'>
        <button type='button' onClick={() => history.goBack()}>
          Cancel
        </button>
        <button type='submit' onClick={(e) => handleSubmit(e)}>
          Export
        </button>
      </div>
    </section>
  );
}

export default ExportData;