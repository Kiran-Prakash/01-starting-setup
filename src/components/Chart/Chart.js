import {React} from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props => {
    const expensesValueDataPoints = props.dataPoints.map(expense => expense.value);
    const expenseMaxValue = Math.max(...expensesValueDataPoints);
    return (<div className='chart'>
        {props.dataPoints.map(dataPoint=>(
            <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={expenseMaxValue}
            label={dataPoint.label}/>
        ))}
    </div>);
}
export default Chart;