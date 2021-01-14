import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {register} from '../actions/userActions.js';
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


function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();
  
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
      if (userInfo) {
        props.history.push(redirect);
      }
      return () => {
        //
      };
    }, [userInfo]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(register(name, email, password));
    }
    return <div className="form">
 <MDBView id="view">>
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
      Create an Account
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
        <MDBCard id='classic-card' onSubmit={submitHandler}>
          <MDBCardBody className='white-text'>
            <h3 className='text-center'>
              <MDBIcon icon='user' /> Register:
            </h3>
            <hr className='hr-light' />
            <MDBInput
            type='name'
            name='name'
            id='name'
            onChange={(e) => setName(e.target.value)}
              className='white-text'
              iconClass='white-text'
              label='Name'
              icon='user'
            />
            <MDBInput
            type='email'
            name='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
              className='white-text'
              iconClass='white-text'
              label='Email'
              icon='envelope'
            />
            <MDBInput
              className='white-text'
              iconClass='white-text'
              label='Password'
              icon='lock'
              id='password' 
              name='password'
               onChange={(e) => setPassword(e.target.value)}
              type='password'
            />
             <MDBInput
              className='white-text'
              iconClass='white-text'
              label='Re-Enter Password'
              icon='lock'
              id='rePassword' 
              name='rePassword'
               onChange={(e) => setRePassword(e.target.value)}
              type='rePassword'
            />
            <div className='text-center mt-4 black-text'>
              <MDBBtn color='indigo'
              type='submit'
              >Register</MDBBtn>
              <hr className='hr-light' />
              
            </div>
            <div>
              <p>  Already have an account?</p>
            <Link  to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}className="text-center" > <MDBBtn color='indigo'
              >Sign In</MDBBtn></Link>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</MDBView>
   </div>}
  export default RegisterScreen;