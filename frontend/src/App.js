
import React from 'react';
import './App.css';
import CartScreen from './Screens/CartScreen.js';
import HomeScreen from './Screens/HomeScreen.js';
import PaintScreen from './Screens/PaintScreen.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import SigninScreen from './Screens/SigninScreen.js';
import { useDispatch, useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen.js';
import PaintingsScreen from './Screens/ProductsScreen.js';
import ShippingScreen from './Screens/ShippingScreen.js';
import PaymentScreen from './Screens/PaymentScreen.js';
import PlaceOrderScreen from './Screens/PlaceOrderScreen.js';
import OrderScreen from './Screens/OrderScreen.js';
import CallToActionIntro from './Screens/IntroScreen.js';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import ProfileScreen from './Screens/ProfileScreen.js';
// import PrivateRoute from "./components/PrivateRoute.js"
import { signout } from './actions/userActions';
import OrdersScreen from './Screens/OrderHistoryScreen.js';



function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  //   const toggleCollapse = collapseID => () =>
  //   this.setState(prevState => ({
  //   collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  // }));


  return (
    <BrowserRouter>
      <div className="grid-container">
        <MDBNavbar color="info-color" dark expand="md" >
          <MDBNavbarBrand color="text-white">
            <MDBNavLink className="waves-effect waves-light" to="/">
              <strong className="white-text">Logo/Name</strong></MDBNavLink>
          </MDBNavbarBrand>
          {/* <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar> */}
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/shop">
                <MDBIcon icon="store" className="mr-1" />Store</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="/cart">
                <MDBIcon icon="shopping-cart" className="mr-1" />Cart</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="mr-1" />Profile
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!"> {
                    userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                      <Link to="/signin"> Sign In</Link>
                  }

                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    {userInfo && userInfo.isAdmin && (
                      <div className="dropdown">
                        <p>Admin</p>
                        <ul className="dropdown-content">
                          <li>
                            <Link to="/orders">Orders</Link>

                          </li>
                          <li>
                            <Link to="/products">Products</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#signout"
                    onClick={signoutHandler}
                  >Sign out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>

        </MDBNavbar>
        {/* <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">Bussiness Name</Link>
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
        </aside> */}
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
            <Route path="/" exact={true} component={CallToActionIntro} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/orders" component={OrdersScreen}></Route>
            <Route path="/shop" exact={true} component={HomeScreen} />
            <Route
              path="/profile" component={ProfileScreen}></Route>
          </div>

        </main>
        <footer className="footer" >
          Copy Rights
       </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;




