import { ExpenseDataType } from '../Expenses/Expenseitem';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

type NewExpensePropsType = {
  onAddExpense: (expense: ExpenseDataType) => void;
};

const NewExpense = ({ onAddExpense }: NewExpensePropsType) => {
  const saveExpenseData = (enteredData: ExpenseDataType) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
