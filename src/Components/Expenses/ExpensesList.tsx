import { ExpensesType } from '../../App';
import ExpenseItem from './Expenseitem';
import './ExpensesList.css';

type ExpensesListPropsType = {
  items: ExpensesType;
};

const ExpensesList = ({ items }: ExpensesListPropsType) => {
  return (
    <ul className="expenses-list">
      {items.length === 0 ? (
        <h2 className="expenses-list__fallback">No expenses found!</h2>
      ) : (
        <>
          {items.map(({ id, title, amount, date }) => (
            <ExpenseItem key={id} title={title} amount={amount} date={date} />
          ))}
        </>
      )}
    </ul>
  );
};

export default ExpensesList;
