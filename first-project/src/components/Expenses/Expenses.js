import React, { useState } from 'react';
import ExpencesList from './ExpencesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filterYearValue = props.items.filter(expence =>{
    return expence.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpencesList fileterYrValue = {filterYearValue} />
      </Card>
    </div>
  );
};

export default Expenses;
