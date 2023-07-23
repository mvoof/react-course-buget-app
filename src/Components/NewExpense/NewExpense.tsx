import { useState } from 'react';
import { ExpenseDataType } from '../Expenses/Expenseitem';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

type NewExpensePropsType = {
  onAddExpense: (expense: ExpenseDataType) => void;
};

const NewExpense = ({ onAddExpense }: NewExpensePropsType) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (enteredData: ExpenseDataType) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
