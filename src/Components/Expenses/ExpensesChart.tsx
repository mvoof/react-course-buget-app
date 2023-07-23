import { ExpensesType } from '../../App';
import Chart from '../Chart/Chart';

export type ChartDataPointType = {
  label: string;
  value: number;
};

type ExpensesChartPropsType = {
  expenses: ExpensesType;
};

const ExpensesChart = ({ expenses }: ExpensesChartPropsType) => {
  const chartDataPoints: ChartDataPointType[] = [
    {
      label: 'Jan',
      value: 0,
    },
    {
      label: 'Feb',
      value: 0,
    },
    {
      label: 'Mar',
      value: 0,
    },
    {
      label: 'Apr',
      value: 0,
    },
    {
      label: 'May',
      value: 0,
    },
    {
      label: 'Jun',
      value: 0,
    },
    {
      label: 'Jul',
      value: 0,
    },
    {
      label: 'Aug',
      value: 0,
    },
    {
      label: 'Sep',
      value: 0,
    },
    {
      label: 'Oct',
      value: 0,
    },
    {
      label: 'Nov',
      value: 0,
    },
    {
      label: 'Dec',
      value: 0,
    },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at Jan => 0

    console.log(expenseMonth);
    
    chartDataPoints[expenseMonth].value += +expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
