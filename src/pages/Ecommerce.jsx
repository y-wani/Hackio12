import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const Flashcard = ({ title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
    <h4 className="font-semibold text-xl mb-3">{title}</h4>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Ecommerce = () => {
  const { currentMode } = useStateContext();

  return (
    <div className={`p-8 rounded-3xl m-4 shadow-lg transition-all duration-300 ${currentMode === 'Dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">Insights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Flashcard
          title="Consistent Data Collection"
          description="The uniformity in the date range indicates that data collection processes have been systematic and controlled. Observations are likely gathered at regular intervals, adhering to standard operational practices."
        />
        <Flashcard
          title="Well-defined Operational Period"
          description="The timeframe aligns with the operational period of the organization or project, suggesting that data entry aligns with specific reporting cycles. This contributes to the integrity and relevance of the recorded observations."
        />
        <Flashcard
          title="Focused Data Scope"
          description="The lack of outliers may also reflect a targeted focus on particular safety criteria within the specified timeframe, ensuring that observations are relevant to current operational standards and safety practices."
        />
      </div>
    </div>
  );
};

export default Ecommerce;
