import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

let showForm = false;
const NewExpense = (props) => {
const[isFormShow, setFormDisplay] = useState(showForm);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  const showFormData = ()=>{
    showForm = true;
    setFormDisplay(showForm);
  }
  const showAddButton = (val)=>{
    setFormDisplay(val);
  }
  return (
    <div className='new-expense'>
      {(!isFormShow && <button onClick={showFormData}>Add New Expence</button>)}
      {(isFormShow && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onSubCanClick={showAddButton}/>)}
    </div>
  );
};

export default NewExpense;
