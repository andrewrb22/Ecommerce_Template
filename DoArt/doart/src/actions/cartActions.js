import Axios from "axios";
import cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, } from "../constants/cartConstants";


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
                posterQty: data.posterQty,
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
export {addToCart, removeFromCart} ;