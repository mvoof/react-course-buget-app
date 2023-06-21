import { FilterYearType } from './Expenses';
import './ExpensesFilter.css';

type ExpensesFilterPropsType<T extends FilterYearType> = {
  onChangeFilter: (yearValue: T) => void;
  selected: T;
  years: T[];
};

const ExpensesFilter = <T extends FilterYearType>({
  onChangeFilter,
  selected,
  years,
}: ExpensesFilterPropsType<T>) => {
  const dropdownChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(e.target.value as T);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          {years.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
