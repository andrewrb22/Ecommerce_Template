
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
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

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
              <MDBNavLink className="waves-effect waves-light" to="#!">
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
                  <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
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
            <Route path="/shop" exact={true} component={HomeScreen} />

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




<MDBView onSubmit={submitHandler}>
<MDBMask className='d-flex justify-content-center align-items-center gradient' />
<MDBContainer
  style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
  className='mt-5  d-flex justify-content-center align-items-center'
>
  <MDBRow>
    <MDBAnimation
      type='fadeInLeft'
      delay='.3s'
      className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
    >
      <h1 className='h1-responsive font-weight-bold'>
        Sign up right now!
      </h1>
      <h1>
      {loading && <div> Loading...</div>}
                    {error && <div> {error}</div>}
      </h1>
      <hr className='hr-light' />
      <h6 className='mb-4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
        repellendus quasi fuga nesciunt dolorum nulla magnam veniam
        sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
        quisquam iste, maiores. Nulla.
      </h6>
      <MDBBtn outline color='white'>
        Learn More
      </MDBBtn>
    </MDBAnimation>

    <MDBCol md='6' xl='5' className='mb-4'>
      <MDBAnimation type='fadeInRight' delay='.3s'>
        <MDBCard id='classic-card'>
          <MDBCardBody className='white-text'>
            <h3 className='text-center'>
              <MDBIcon icon='user' /> Register:
            </h3>
            <hr className='hr-light' />
           
            <MDBInput
            type='email'
            name='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
              className='white-text'
              iconClass='white-text'
              label='Your email'
              icon='envelope'
            />
            <MDBInput
              className='white-text'
              iconClass='white-text'
              label='Your password'
              icon='lock'
              id='password' 
              name='password'
               onChange={(e) => setPassword(e.target.value)}
              type='password'
            />
            <div className='text-center mt-4 black-text'>
              <MDBBtn color='indigo'>Sign Up</MDBBtn>
              <hr className='hr-light' />
              <div className='text-center d-flex justify-content-center white-label'>
                <a href='#!' className='p-2 m-2'>
                  <MDBIcon
                    fab
                    icon='twitter'
                    className='white-text'
                  />
                </a>
                <a href='#!' className='p-2 m-2'>
                  <MDBIcon
                    fab
                    icon='linkedin'
                    className='white-text'
                  />
                </a>
                <a href='#!' className='p-2 m-2'>
                  <MDBIcon
                    fab
                    icon='instagram'
                    className='white-text'
                  />
                </a>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</MDBView>