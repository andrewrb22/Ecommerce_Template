
import React from 'react';
import './App.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import PaintScreen from './screens/PaintScreen'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import PaintingsScreen from './screens/PaintingsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import CallToActionIntro from './screens/IntroScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/intro">Bussiness Name</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin"> Sign In</Link>
            }

          </div>
        </header>
        <aside className="sidebar">
          <h1>Products</h1>
          <button className="sidebar-close-button" onClick={closeMenu}>X</button>
          <ul>
            <li><h3>Product 1</h3></li>
            <li><h3>Product 2</h3></li>
            <li><h3>Product 3</h3></li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/products" component={PaintingsScreen} />
          <Route path="/shipping" component={ShippingScreen} />
            <Route path="/paint/:id" component={PaintScreen} />
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/intro" exact={true} component={CallToActionIntro} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>

        </main>
        <footer className="footer">
          Copy Rights C.DuArt
       </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
