import { CART_ADD_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const paint = state.cartItems.find(x => x.paint === item.paint);
            if (paint) {
                return {
                    cartItems:
                     state.cartItems.map(x => x.paint === paint.paint ? item : x)
                };

            }
            return { cartItems: [...state.cartItems, item] };
            default: 
            return state
                
    }
}

export default cartReducer;