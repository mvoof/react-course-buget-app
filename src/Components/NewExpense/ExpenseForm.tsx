import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    tittle: '',
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

    const expenseData = {
      tittle: userInput.tittle,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

    setUserInput({
      tittle: '',
      amount: '',
      date: '',
    });

    console.log(expenseData);
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="tittleInput">Tittle</label>
          <input
            type="text"
            name="tittleInput"
            id="tittleInput"
            onChange={(e) => {
              userInputChangeHandler(e, 'tittle');
            }}
            value={userInput.tittle}
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
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
