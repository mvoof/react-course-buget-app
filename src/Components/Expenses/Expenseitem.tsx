import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { ExpenseItemType } from '../../App';

export type ExpenseDataType = Omit<ExpenseItemType, 'id'>;
type ExpenseItemPropsType = ExpenseDataType;

const ExpenseItem = ({ title, amount, date }: ExpenseItemPropsType) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
