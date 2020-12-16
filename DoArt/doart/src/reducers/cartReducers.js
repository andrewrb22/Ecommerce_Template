import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT, CART_EMPTY } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [], shipping:{}, payment:{} }, action) {
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
            case CART_REMOVE_ITEM:
                return{ cartItems: state.cartItems.filter(x => x.paint !== action.payload)};
                case CART_SAVE_SHIPPING:
                    return{...state, shipping: action.payload}
                    case CART_SAVE_PAYMENT:
                        return{...state, payment: action.payload}
            case CART_EMPTY:
                return{...state, cartItems: []};
                        default: 
            return state
                
    }
}

export  {cartReducer};