import React, { useState } from 'react';
import { ChartsHeader, Stacked as StackedChart } from '../../components';
import { stackedChartData } from '../../data/dummy';

const Stacked = () => {
  const [selectedDataset, setSelectedDataset] = useState('dataset1'); // Initial dataset

  // Function to handle dataset change
  const handleDatasetChange = (event) => {
    setSelectedDataset(event.target.value);
  };

  // Retrieve the selected dataset details
  const { data, primaryXAxis, primaryYAxis } = stackedChartData[selectedDataset];

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-lg">
      <ChartsHeader category="Stacked" title="Observations" />

      {/* Dropdown to switch datasets */}
      <div className="flex justify-end mb-4">
        <select 
          onChange={handleDatasetChange} 
          value={selectedDataset} 
          className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition duration-300"
        >
          <option value="dataset1">SCL classifications</option>
          <option value="dataset2">Missing Data</option>
          <option value="dataset3">Incidents by Month</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Display only the selected dataset */}
      <div className="w-full">
        <StackedChart
          data={data}
          primaryXAxis={primaryXAxis}
          primaryYAxis={primaryYAxis}
          width="100%"
          height="420px"
        />
      </div>
    </div>
  );
};

export default Stacked;
