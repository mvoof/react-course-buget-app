import { useState } from 'react';
import { ExpensesType } from '../../App';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export type FilterYearType = '2022' | '2021' | '2020' | '2019';
export type FilterYearArrayType = FilterYearType[];

const years: FilterYearArrayType = ['2022', '2021', '2020', '2019'];

type ExpensesPropsType = {
  expenses: ExpensesType;
};

const Expenses = ({ expenses }: ExpensesPropsType) => {
  const [filteredYear, setFilteredYear] = useState<FilterYearType>('2019');

  const filterChangeHandler = (year: FilterYearType) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        years={years}
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
