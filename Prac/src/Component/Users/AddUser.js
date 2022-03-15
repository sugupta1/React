import React, { Fragment } from "react";

const AddUser = props=>{
    return(
        <Fragment>
            <label htmlFor="userName">UserName</label>
            <input id="userName" type={Text}></input>
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type={Number}></input>
            <button>Submit</button>
        </Fragment>
    )
}

export default AddUser;