import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'
const MainNavigation = ()=>{
    return(<header className={classes.header}>
        <div className={classes.logo}>Great Quote</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to='/allquotes'>AllQuotes</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/addnewquotes'>AddQuotes</NavLink>
                </li>
            </ul>
        </nav>
    </header>)
}

export default MainNavigation;