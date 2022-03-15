import { useParams } from "react-router-dom";
const ProductsDetail = ()=>{
    const id = useParams();
    return (
            <div>
                <h1>Product Details</h1>
                <p>{id.productid}</p>
            </div>
            
        )
}
export default ProductsDetail;