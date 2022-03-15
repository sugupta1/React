import {Route,Switch,Redirect} from 'react-router-dom'
import AllQuotes from './pages/AllQuote';
import AddNewQuote from './pages/AddNewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import PageNotFound from './pages/NotFoundPage';
const dummyData = [{id:'q1', author:'Subodh Gupta', text:"This is my first Router Project"},
                {id:'q2', author:'Deeksha Gupta', text:"wife of Subodh gupta"},
                {id:'q3', author:'Saanvi Gupta', text:"daughter of Subodh gupta"},
                {id:'q4', author:'Rajkumar Gupta', text:"Father of Subodh gupta"}];
function App() {
  return (
    <Layout>
        <Switch>
          <Route path='/' exact>
              <Redirect to ='/allquotes' />
            </Route>
            <Route path='/allquotes' exact>
              <AllQuotes dummy = {dummyData}/>
            </Route>
            <Route path='/allquotes/:quoteId'>
              <QuoteDetail dummy = {dummyData}/>
            </Route>
            <Route path='/addnewquotes'>
                <AddNewQuote/>
            </Route>
            <Route path='*'>
              <PageNotFound/>
            </Route>    
        </Switch>
    </Layout>
  );
}

export default App;
