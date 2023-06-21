import { ExpenseDataType } from './Expenseitem';
import './ExpenseDate.css';

type ExpenseDatePropsType = Pick<ExpenseDataType, 'date'>;

const ExpenseDate = ({ date }: ExpenseDatePropsType) => {
  return (
    <div className="expense-date">
      <div className="expense-date__day">
        {date.toLocaleDateString('ru-RU', {
          day: '2-digit',
        })}
      </div>
      <div className="expense-date__month">
        {date.toLocaleDateString('ru-RU', {
          month: 'long',
        })}
      </div>
      <div className="expense-date__year">
        {date.toLocaleDateString('ru-RU', {
          year: 'numeric',
        })}
      </div>
    </div>
  );
};

export default ExpenseDate;
