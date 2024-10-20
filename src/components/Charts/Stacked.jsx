import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

const StackedChart = ({ data, primaryXAxis, primaryYAxis, width, height }) => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={primaryXAxis}
      primaryYAxis={primaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data} // Use the data prop
          xName="x" // Define xName
          yName="y" // Define yName
          name="Observations" // Optional: Give a name for the legend
          type="StackingColumn" // Specify the type of series
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackedChart;
