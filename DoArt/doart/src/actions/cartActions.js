import Axios from "axios";
import cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, } from "../constants/cartConstants";


const addToCart = (paintId, qty) => async (dispatch, getState) => {

    try {
        const { data } = await Axios.get("/api/paint/" + paintId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                paint: data._id,
                name: data.name,
                images: data.images,
                price: data.price,
                category: data.category,
                Qty: data.Qty,
                qty
            }
        });

        const {cart:{cartItems}} = getState();
        cookie.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {

    }
}
const removeFromCart = (paintId) => (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: paintId});
    const {cart:{cartItems}} = getState();
        cookie.set("cartItems", JSON.stringify(cartItems));
}
 const saveShipping = (data) => (dispatch) => {
     dispatch ({type: CART_SAVE_SHIPPING, payload: data});
 }
export {addToCart, removeFromCart, saveShipping} ;