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

    <MDBContainer className='shipping'>
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={submitHandler} >
            <p className="h2 text-center mb-4">Shipping</p>
            <div className="black-text">
           
              <MDBInput 
              className="black-text"
              label='Address'
              icon="address-card"
               type="text" 
               name="address" 
               id="address" onChange={(e) => setAddress(e.target.value)}
                success="right" />
            
              <MDBInput 
              label="City"
               icon="map-marked-alt" 
               name="city"
                id="city"
                 onChange={(e) => setCity(e.target.value)}
                success="right" />
           
              <MDBInput
               label="State"
               icon="map-marker-alt"
                type="text"
                 name="state"
                  id="state"
                   onChange={(e) => setstate(e.target.value)} success="right" />
             
              <MDBInput
               label="Postal"
                icon="map-pin"
                 type="text"
                  name="postal"
                   id="postal"
                    onChange={(e) => setPostal(e.target.value)} />





              <div>
                <MDBBtn color="primary" type="submit" className="button primary">Continue</MDBBtn>
              </div>

            </div>
          </form>
          </MDBCol>
          </MDBRow>
    </MDBContainer>
  </div>
}
export default ShippingScreen;