import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { ExpenseItemType } from '../../App';

export type ExpenseData = Omit<ExpenseItemType, 'id'>;
export type ExpenseItemProps = ExpenseData;

function ExpenseItem({ title, amount, date }: ExpenseItemProps) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
