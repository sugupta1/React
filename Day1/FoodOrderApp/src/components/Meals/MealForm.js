import classes from './MealForm.module.css'
import Input from '../UI/Input';
const MealForm = props=>{
    const AddHandler = (event)=>{
        event.preventDefult();
        console.log("Hi");        
    }
    return(<form className={classes.form} onSubmit = {AddHandler}>
        <Input label={'Amout'} input = {{
            id:'amount_'+ props.id,
            type:Number,
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button type='submit'>+Add</button>
    </form>)
}
export default MealForm;