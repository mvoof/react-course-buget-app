import './App.css';
import { ExpenseData } from './Components/Expenses/Expenseitem';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

export type ExpenseItemType = {
  id: string;
  title: string;
  amount: string;
  date: Date;
};

export type ExpensesType = ExpenseItemType[];

const expenses: ExpensesType = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: '94.12',
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: '799.49', date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: '294.67',
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: '450',
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const addExpenseHandler = (expense: ExpenseData) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
