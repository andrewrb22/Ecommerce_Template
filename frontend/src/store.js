import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cookie from 'js-cookie';
import { cartReducer } from './reducers/cartReducers';
import { paintListReducer, paintDetailsReducer, paintSaveReducer, paintDeleteReducer } from './reducers/paintReducers'
import { userRegisterReducer, userSigninReducer,userDetailsReducer } from './reducers/userReducer.js';
import { myOrderListReducer, orderCreateReducer, orderDetailsReducer, orderListReducer, orderPayReducer } from './reducers/orderReducers.js'


const cartItems = cookie.getJSON("cartItems") || [];

const userInfo = cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems, shipping: {}, payment: {} }, userSignin: { userInfo } }


const reducer = combineReducers({
    paintList: paintListReducer,
    paintDetails: paintDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    paintSave: paintSaveReducer,
    paintDelete: paintDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userDetails: userDetailsReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    


})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;