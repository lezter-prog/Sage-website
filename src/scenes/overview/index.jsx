import React from 'react';
import PeopleTable from '../overview/Table.jsx';
import data from '../overview/people.json';

const App = () => {
  return (
    <div>
      <h1>Student Information</h1>
      <PeopleTable data={data} />
    </div>
  );
};

export default App;
