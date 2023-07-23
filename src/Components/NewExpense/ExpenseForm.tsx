import { useState } from 'react';
import './ExpenseForm.css';
import { ExpenseDataType } from '../Expenses/Expenseitem';

type ExpenseFormPropsType = {
  onSaveExpenseData: (expenseData: ExpenseDataType) => void;
  onCancel: () => void;
};

const ExpenseForm = ({ onSaveExpenseData, onCancel }: ExpenseFormPropsType) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const userInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    userInputField: string
  ) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [userInputField]: e.target.value,
      };
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expenseData: ExpenseDataType = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

    onSaveExpenseData(expenseData);

    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="titleInput">Title</label>
          <input
            type="text"
            name="titleInput"
            id="titleInput"
            onChange={(e) => {
              userInputChangeHandler(e, 'title');
            }}
            value={userInput.title}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amountInput">Amount</label>
          <input
            type="number"
            name="amountInput"
            id="amountInput"
            min="0.1"
            step="0.1"
            onChange={(e) => {
              userInputChangeHandler(e, 'amount');
            }}
            value={userInput.amount}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="dateInput">Date</label>
          <input
            type="date"
            name="dateInput"
            id="dateInput"
            onChange={(e) => {
              userInputChangeHandler(e, 'date');
            }}
            value={userInput.date}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
