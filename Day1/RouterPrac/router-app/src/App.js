import './App.css';
import {Route, Redirect,Switch} from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductsDetail from './pages/ProductsDetails';

function App() {
  return (
  <div>
    <MainHeader/>
    <main>
      <Switch>  
        <Route  path="/" exact>
          <Redirect to= "/welcome" />
        </Route>
        <Route path="/welcome">
            <Welcome/>
        </Route>
        <Route path="/products" exact>
            <Products/>
        </Route>
        <Route path="/products/:productid">
            <ProductsDetail/>
        </Route>
      </Switch>
    </main>
  </div>  
  );
}

export default App;
//switch use for swith to specific page .Renders the first child <Route> 
//or <Redirect> that matches the location.
// Redirect use to redirect welcome page if user doecnot give any path,only give /