import React from "react";
import Card from "../UI/Card";
import classes from './DisplayItem.module.css'

const DisplayItem = props=>{
    return(
        <Card className={classes.users}>
            <ul>{props.users.map(val =>{
                return <li key = {val.id}>
                    {`${val.name} age is ${val.age}`}
                </li>        
                })             
            }</ul>
        </Card>
    );
};

export default DisplayItem;