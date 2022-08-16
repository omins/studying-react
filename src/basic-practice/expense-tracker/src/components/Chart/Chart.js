import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {
        dataPoints.map(dataPoint => (
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        ))
      }
    </div>
  )
}

export default Chart;