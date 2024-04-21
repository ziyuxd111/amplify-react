// Graph.js
import React from 'react';
import StepsChart from './Step';
import WeightChart from './Weight';
import HeartChart from './Heart';
import './Graph.css';

function App() {
  return (
    <div className="App">
      <StepsChart />
      <WeightChart />
      <HeartChart />
    </div>
  );
}

export default App;
