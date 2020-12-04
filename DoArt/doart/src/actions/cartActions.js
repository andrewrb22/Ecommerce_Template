import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, } from "../constants/cartConstants";


const addToCart = (paintId, qty) => async (dispatch) => {

    try {
        const { data } = await Axios.get("/api/paint/" + paintId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                paint: data._id,
                name: data.name,
                images: data.images,
                price: data.price,
                category: data.category,
                posterQty: data.posterQty,
                qty
            }
        });
    } catch (error) {

    }
}
const removeFromCart = (paintId) => (dispatch) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: paintId});
}
export {addToCart, removeFromCart} ;