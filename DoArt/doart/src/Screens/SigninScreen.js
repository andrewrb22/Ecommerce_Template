import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {signin} from '../actions/userActions.js';
import { useHistory } from "react-router-dom";
import {
  
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBAnimation
  } from 'mdbreact';

function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();
    const history = useHistory();
   const redirect = props.location.search?props.location.search.split("=")[1]:'/';
    useEffect(() => {
      if (userInfo) {
        history.push(redirect);
      }
      return () => {
        //
      };
    }, [userInfo]);

   

  
  

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));


    }
    return <div className="form">
        
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
      Sign in to your account
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
      
    </MDBAnimation>

    <MDBCol md='6' xl='5' className='mb-4'>
      <MDBAnimation type='fadeInRight' delay='.3s'>
        <MDBCard id='classic-card'>
          <MDBCardBody className='white-text'>
            <h3 className='text-center'>
              <MDBIcon icon='user' /> Sign in:
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
              <MDBBtn color='indigo'
              >Sign Up</MDBBtn>
              <hr className='hr-light' />
              
            </div>
            <div>
              <p> New to Our Store?</p>
            <Link to={redirect === "/" ? "register": "register?redirect="+ redirect} className="text-center" > <MDBBtn color='indigo'
              >Create Account</MDBBtn></Link>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</MDBView>
    </div>
}
export default SigninScreen;