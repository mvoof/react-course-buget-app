import { useState } from 'react';
import { ExpensesType } from '../../App';
import Card from '../UI/Card';
import ExpenseItem from './Expenseitem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

export type FilterYearType = '2022' | '2021' | '2020' | '2019';
export type FilterYearArrayType = FilterYearType[];

const years: FilterYearArrayType = ['2022', '2021', '2020', '2019'];

export type ExpensesProps = {
  items: ExpensesType;
};

function Expenses({ items }: ExpensesProps) {
  const [filteredYear, setFilteredYear] = useState<FilterYearType>('2019');

  const filterChangeHandler = (value: FilterYearType) => {
    setFilteredYear(value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        years={years}
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />

      {items.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
}

export default Expenses;
