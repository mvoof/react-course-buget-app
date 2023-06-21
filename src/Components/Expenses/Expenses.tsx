import { ExpensesType } from '../../App';
import Card from '../UI/Card';
import ExpenseItem from './Expenseitem';
import './Expenses.css';

export type ExpensesProps = {
  items: ExpensesType;
};

function Expenses({ items }: ExpensesProps) {
  return (
    <Card className="expenses">
      {items.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
}

export default Expenses;
