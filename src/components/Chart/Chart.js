import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    // This component will be used to output the chartbar
    // component dynamically, by iterating through an array
    // of data points and mapping every data point to a
    // chartbar
    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoint.map(dataPoint => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label} 
                />
            ))}
        </div>
    );
};

export default Chart;