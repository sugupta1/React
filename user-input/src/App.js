import React, { useState } from 'react';
import AddUser from './Components/Users/AddUsers';
import DisplayItem from './Components/Users/DisplayItem';

function App() {

  // way to add item in lits
  const [userList, setUserList] = useState([]);
  const getUserItem = (uName, uAge)=>{
    setUserList(prevList =>{
      return [...prevList ,{name :uName,age: uAge, id: Math.random().toString()}];
    });
  }

  return (
    <div>
      <AddUser userList ={getUserItem} />
      <DisplayItem users= {userList} />
    </div>
  );
}

export default App;
