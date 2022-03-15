import classes from './AvaliableMeal.module.css'
import Card from '../UI/Card';
import MealForm from './MealForm';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeal = ()=>{
    return (<section className={classes.meals}>
            <Card>
              <ul >
                {DUMMY_MEALS.map(item=>{
                    return <li key= {item.id} className = {classes.meal}>
                                <div>
                                  <h3>{item.name}</h3>
                                  <div className={classes.description}>{item.description}</div>
                                  <div className={classes.price}>{item.price.toFixed(2)}</div>
                                </div>
                                <div>
                                  <MealForm id={item.id} />
                                </div>
                            </li>
                })}
              </ul>
            </Card>
      </section>)
}

export default AvailableMeal;