import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';


function ShippingScreen(props) {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setstate] = useState('');
  const [postal, setPostal] = useState('');

  const dispatch = useDispatch();




  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postal, state }));
    props.history.push('payment')
  }
  return <div>
    <CheckoutSteps step1 step2></CheckoutSteps>

    <div className="form">
      <form onSubmit={submitHandler} >
        <p className="h2 text-center mb-4">Shipping</p>
        <div className="black-text">
          <MDBInput label="Address" icon="user" type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}
            success="right" />
          <MDBInput label="City" icon="dollar-sign" name="city" id="city" onChange={(e) => setCity(e.target.value)}
            success="right" />
          <MDBInput label="State" icon="image" type="text" name="state" id="state" onChange={(e) => setstate(e.target.value)} success="right" />
          <MDBInput label="Postal" icon="info-circle" type="text" name="postal" id="postal" onChange={(e) => setPostal(e.target.value)} />





          <div>
            <MDBBtn color="primary" type="submit" className="button primary">Continue</MDBBtn>
          </div>

        </div>
      </form>
    </div>
  </div>
}
export default ShippingScreen;