import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

// Configure Primary X-Axis for DateTime
export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'MMM yyyy', // Format the date labels
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
};

// Configure Primary Y-Axis
export const LinePrimaryYAxis = {
  minimum: 0, // Minimum value for Y-axis
  maximum: 1000, // Adjust based on your data
  interval: 100, // Interval for Y-axis labels
  title: 'Cumulative Incidents', // Title for Y-axis
  labelFormat: '{value}', // Label format
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
