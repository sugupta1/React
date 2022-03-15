import React from 'react'
import Button from "./Button";
import Card from "./Card";
import classes from './Error.module.css';
import ReactDOM from 'react-dom';


const Backdrop = props=>{
    return <div className={classes.backdrop} onClick={props.closeHandle}/>
}

const ModalOverlay = props=>{
        return (<Card className={classes.modal}>
                    <header className={classes.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={classes.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={classes.actions}>
                        <Button onClick={props.closeHandle}>Okey</Button>
                    </footer>
                </Card>)
}

const Error = props=>{
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop closeHandle={props.closeHandle}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                title = {props.title}
                message = {props.message}
                closeHandle = {props.closeHandle}/>,
                document.getElementById('modal-root')
            )}
            
        </React.Fragment>
    )
}
export default Error;