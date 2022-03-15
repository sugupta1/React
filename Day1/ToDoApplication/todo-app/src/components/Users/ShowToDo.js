import React from "react"
import Card from "../UI/Card";
import classes from './ShowToDo.module.css';
const ShowToDo = props=>{
    return (
        <Card className={classes.show} >
            <ul>
                {props.printToDo.map(item=>{
                    return ( 
                    <Card className={classes.show}>
                        <li onClick = {()=>{props.delete(item.id)}} key={item.id} >
                            {`Name = ${item.name}  | Age = ${item.age}`}
                        </li>
                    </Card>)
                })}
            </ul>
        </Card>
    )
}
export default ShowToDo;