import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps';
import { MDBContainer, MDBRow, MDBCol, MDBBtn,MDBIcon} from 'mdbreact'


function PaymentScreen(props) {

    const [paymentMethod, setPaymentMethod] = useState('');

   
    const dispatch = useDispatch();
  
   
   
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(savePayment({paymentMethod}));
      props.history.push('placeorder')
    }
    return <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <div className="form">
                               <form onSubmit={submitHandler} >
                                    <p className="h2 text-center mb-4">Payment Option</p>
                                     <div>   
            
                                        <input  type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)}>
                                            </input>
                                                 <label  htmlFor="paymentMethod" className="black-text  mb-4 h4">
                                               
                                                 <MDBIcon fab icon="cc-paypal" size="6x" />
                                                 
            
       </label>
                                      </div>
          
                                        <MDBBtn color="primary" type="submit" className="button primary">
                                                      Continue
                                          </MDBBtn>
                                 </form>
                              </div>
                          </MDBCol>
                      </MDBRow>
                  </MDBContainer>

    </div>
  }
  export default  PaymentScreen;