import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUsers.module.css'
import Button from "../UI/Button";
import Error from "../UI/Error";

const AddUser = props=>{
    const [nmValue, setNm] = useState('');
    const [ageValue, setAge] = useState('');
    const [errDetails, setError] = useState();
    const submitHandler = (event)=>{
        event.preventDefault();
        if(nmValue.trim().length === 0 || ageValue.trim().length === 0){
            setError({
                title: "Fill correct details",
                msg:"Name and Age must not be empty "
            });
            return;
        }
        if(+ageValue <1){
            setError({
                title: "Age is not correct",
                msg:" Fill correct age details "
            });
            return;
        }
        props.userList(nmValue,ageValue);
        setNm('');
        setAge('');
    };
    const nameHandler = (event)=>{
        setNm(event.target.value);
    }
    const ageHandler = (event)=>{
        setAge(event.target.value);
    }
    const setErrHandle = ()=>{
        setError(null);
    }

    return(
        <div>
            {errDetails && <Error title={errDetails.title} message={errDetails.msg} onConfirm ={setErrHandle}/>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username" >User Name</label>
                    <input  type= "text" placeholder="enter name" id="username" value={nmValue} onChange={nameHandler}/>
                    <label htmlFor="age">Age(year)</label>
                    <input  type= "number" placeholder="enter age" id="age" value = {ageValue} onChange={ageHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;