import React from 'react';

import './ChartBar.css';

const ChartBar = props => {
    let barHeight = '0%';

    // checking if the current month bar has any expenses
    if (props.maxValue > 0) {
        // calculating percentage to fill bar height
        barHeight = Math.round((props.value /props.maxValue) * 100) + '%';    
    }

    // setting the style of div element dynamically to generate bar height
    return (
        <div className="ChartBar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barHeight}}></div>
            </div>
                <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
