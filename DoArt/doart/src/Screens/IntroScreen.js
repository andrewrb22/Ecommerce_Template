import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon
} from 'mdbreact';
import './CallToActionIntro.css';

class CallToActionIntro extends React.Component {
  

  render() {
    return (
      <div id='caltoaction'>
        
        <MDBView src='https://mdbootstrap.com/img/Photos/Others/gradient2.png'>
          <MDBMask className='rgba-purple-slight ' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '14rem' }}
            className='d-flex justify-content-center align-items-center'
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 text-center'>
                <h1 className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                  Bussiness Name
                </h1>
                <h5 className='pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5'>
                 Slogan or Mission Statemente!
                </h5>
                <MDBBtn rounded className='btn-purple'>
                  <MDBIcon icon='user' className='mr-2' /> Shop With Us!
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default CallToActionIntro;