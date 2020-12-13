import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps';


function PaymentScreen(props) {

    const [payment, setPayment] = useState('');

   
    const dispatch = useDispatch();
  
   
   
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(savePayment({paymentMethod}));
      props.history.push('plaveorder')
    }
    return <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
    
     <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Payment </h2>
          </li>
         
          <li>
            <label htmlFor="addres">
              Address
            </label>
            <input type="text" name="addres" id="addres" onChange={(e) => setAddress(e.target.value)}>
            </input>
          </li>
        
          <li>
            <label htmlFor="city">
              City
            </label>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
            </input>
          </li>
        
          <li>
            <label htmlFor="country">
              Country
            </label>
            <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="postal">
              Postal Code
            </label>
            <input type="text" name="postal" id="postal" onChange={(e) => setPostal(e.target.value)}>
            </input>
          </li>
        
        
          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>
  
        </ul>
      </form>
    </div>
    </div>
  }
  export default  PaymentScreen;