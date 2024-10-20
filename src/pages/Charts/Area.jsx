import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className={`m-4 md:m-10 mt-24 p-10 rounded-3xl ${currentMode === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-4">Leveraging Large Language Models (LLMs) for Enhanced Incident Analysis</h2>
      <p className="text-lg mb-4">
        In our analysis, we employed a Large Language Model (LLM) to streamline the classification of incidents. This advanced model enabled us to identify patterns, extract valuable insights, and categorize incidents based on specific criteria such as energy levels and severity. The key benefits of integrating an LLM into our project include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <strong>Scalability:</strong> The LLM can efficiently process vast volumes of incident data, allowing us to analyze more information in significantly less time.
        </li>
        <li className="mb-2">
          <strong>Consistency:</strong> By automating the categorization process, we minimize human error and enhance data quality through consistent analysis.
        </li>
        <li className="mb-2">
          <strong>Actionable Insights:</strong> The LLM provides insights that might be overlooked during manual analysis, enabling us to focus on the most critical risks effectively.
        </li>
      </ul>
      <p className="text-lg">
        By harnessing the power of LLMs, we have significantly improved the efficiency and accuracy of our safety analyses, leading to more informed decision-making.
      </p>
      <p className="text-lg font-semibold">
        Note: We utilized distilBERT as our chosen LLM model.
      </p>
    </div>
  );
};

export default Area;
