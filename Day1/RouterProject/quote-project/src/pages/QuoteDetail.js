import { useParams, Route,Link,useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote"
const QuoteDetail = props=>{
    const id = useParams();
    const match = useRouteMatch();
    console.log("useParam->",id);
    const quote = props.dummy.find(item=> item.id ===id.quoteId);
    if(!quote){
        return<p>No Quote found</p>
    }
    return (<div>
                <HighlightedQuote text={quote.text} author={quote.author}/>
                <Route path={match.path} exact>
                    <div className='centered'>
                        <Link className = 'btn--flat' to={`${match.url}/comments`} >Comments</Link>
                    </div>
                </Route>
                <Route path={`${match.path}/comments`}>
                    <Comments/>
                </Route>
            </div>)
}
export default QuoteDetail;