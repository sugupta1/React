import React,{Fragment} from "react"
import mealImage from '../../assets/Meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = ()=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>{'Book your favourite foods'}</h1>
                <HeaderCartButton/>
            </header>
            <div>
                <img src= {mealImage} alt="Full of meals on the table" className={classes.mainimage}/>
            </div>
        </Fragment>
    )
}
export default Header;