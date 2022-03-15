import React from "react";
import classes from './Error.module.css';
import Card from "./Card";
import Button from "./Button";

const Error = props=>{
    // const btnHandler = ()=>{
    //     console.log("BTN Handler");
    // };

    return(
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}>
                <Card clasName={classes.modal}>
                    <header className={classes.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={classes.content}>
                        <p>{props.message}</p>
                    </div>        
                    <footer className={classes.actions}>
                        <Button onClick={props.onConfirm}>Okey</Button>
                    </footer>
                </Card>
            </div>
        </div>
    );
}

export default Error;