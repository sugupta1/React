import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const AddNewQuote = ()=>{
    const history = useHistory();
    const addNewQuoteHandler = (newDeatils)=>{
        console.log(newDeatils);
        history.push('/allquotes');// it will goback to allquotes  URL
    }
    return(<QuoteForm onAddQuote={addNewQuoteHandler}/>)
}
export default AddNewQuote;