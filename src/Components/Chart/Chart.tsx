import { ChartDataPointType } from '../Expenses/ExpensesChart';
import './Chart.css';
import ChartBar from './ChartBar';

type ChartPropsType = {
  dataPoints: ChartDataPointType[];
};

const Chart = ({ dataPoints }: ChartPropsType) => {
  const dataPoiintsValues = dataPoints.map(({ value }) => value);
  const totalMaximium = Math.max(...dataPoiintsValues)


  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar key={label} value={value} maxValue={totalMaximium} label={label} />
      ))}
    </div>
  );
};

export default Chart;
