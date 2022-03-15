import { Route } from "react-router-dom";
const Welcome = ()=>{
    return(
    <section>
        <h1>{'Welcome to Router'}</h1>
        <Route path='/welcome/newuser'>
            <h2>Welcome new user</h2>
        </Route>
    </section>)
}
export default Welcome;
// Here we use route for nested routes