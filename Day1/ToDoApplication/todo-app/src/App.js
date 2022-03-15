import React,{useState} from 'react';
import AddToDo from './components/Users/AddToDo';
import ShowToDo from './components/Users/ShowToDo';

const App = ()=>{
  const [todo, setTodo] = useState([])
  const submitVal = (name, age)=>{
    const Details = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      age: age,
    };
    setTodo([...todo, Details]);
  }
  const deleteToDo = id=>{
    const updatedToDo = todo.filter((item)=>{
        return id !== item.id;
    });
    setTodo(updatedToDo);
  }
    return(<div>
      <AddToDo value = {submitVal}/>
      <ShowToDo printToDo={todo} delete= {deleteToDo}/>
    </div>);
}

export default App;