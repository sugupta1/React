import { useRef, useState } from 'react';

import classes from'./AddToDo.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import Error from '../UI/Error';

const AddToDo = props=>{
    const name = useRef();
    const age = useRef();
    const [error, setError] = useState();
    const submitHandler = (e)=>{
        e.preventDefault();
        if(name.current.value.trim().length === 0 ||age.current.value.trim().length === 0){
            setError({
                title:"Something is wrong",
                message:"Please fill all fields"
            })
            return;
        }
        if(+age.current.value < 0){
            setError({
                title:"Age is not correct",
                message:"Please fill correct age"
            })
            return;
        }
        props.value(name.current.value,age.current.value);
        name.current.value = '';
        age.current.value = '';
    }
    const close= ()=>{
        console.log("close called");
        setError();
    }
    return(
        <div>
            {error && <Error title={error.title} message={error.message} closeHandle={close}/>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name" type="text">Name</label>
                    <input id="name" placeholder="Enter Name" type="text" ref={name}/>
                    <label htmlFor="age" type="text">Age(Year)</label>
                    <input id="age" placeholder="Enter Age" type="number" ref={age}/>
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    )
}
export default AddToDo;
