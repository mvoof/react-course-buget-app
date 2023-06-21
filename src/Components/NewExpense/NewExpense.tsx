import { ExpenseData } from '../Expenses/Expenseitem';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export type NewExpenseProps = {
  onAddExpense: (expense: ExpenseData) => void;
};

function NewExpense({ onAddExpense }: NewExpenseProps) {
  const saveExpenseData = (enteredData: ExpenseData) => {
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
}

export default NewExpense;
