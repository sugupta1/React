import {Link} from 'react-router-dom'
const Products = ()=>{
    return(
        <ul>
            <h1>{'Inside the Product'}</h1>
            <li><Link to='/products/p1'>A Book</Link></li>
            <li><Link to='/products/p2'>Game</Link></li>
            <li><Link to='/products/p3'>Food</Link></li>
        </ul>
        )
}
export default Products;