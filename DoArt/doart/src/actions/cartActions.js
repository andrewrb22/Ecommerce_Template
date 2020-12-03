import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';


const addToCart = (paintId, qty) => async (dispatch) =>{
    
    try {
        const {data}=  await axios.get("/api/paint/" + paintId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                paint: data._id,
                name: data.name,
                images: data.images,
                price: data.price,
                collection: data.category,
                posterQty: data.posterQty,
                qty
            }
        });
    } catch (error) {
        
    }
}
export default addToCart;