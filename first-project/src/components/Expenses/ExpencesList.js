import { useLayoutEffect } from 'react';
import './ExpencesList.css'
import ExpenseItem from './ExpenseItem';
const ExpencesList = (props)=>{

    const filteredExpence = props.fileterYrValue;
    if(filteredExpence.length === 0){
      return <h2 className='expenses-list__fallback'>No data found</h2>
    }
    return(
      <ul className='expenses-list'>
         {filteredExpence.map((item)=>{
          return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
      })}
      </ul>
    );
}

export default ExpencesList;