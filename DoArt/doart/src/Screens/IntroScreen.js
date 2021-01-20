import React from 'react';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBInput,
  MDBContainer,
  MDBIcon
} from 'mdbreact';
import './CallToActionIntro.css';

class CallToActionIntro extends React.Component {


  render() {
    return (
      <div id='caltoaction'>

        <MDBView
          src={'https://mdbootstrap.com/img/Photos/Others/images/76.jpg'}
          fixed
        >
          <MDBMask className='rgba-white-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
                  Bussiness
                  <span className='indigo-text font-weight-bold'>Name</span>
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
                  Mission Statement
                </h5>
                <MDBBtn
                  className='btn-indigo'
                  size='lg'
                  href='/shop'

                >
                  Shop Now!
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>



        <MDBContainer >
          <h2 className="h1-responsive font-weight-bold text-center my-5" >
            Contact Information
      </h2>

          <MDBRow>
            <MDBCol md="9" className="md-0 mb-5">
              <form>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput type="text" id="contact-name" label="Your name" />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="contact-email"
                        label="Your email"
                        className="black-text"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput type="text" id="contact-subject" label="Subject" />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="textarea"
                        id="contact-message"
                        label="Your message"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
              </form>
              <div className="text-center text-md-left">
                <MDBBtn color="purple" size="md">
                  Send
            </MDBBtn>
              </div>
            </MDBCol>
            <MDBCol md="3" className="text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <MDBIcon icon="map-marker-alt" size="2x" className="purple-text" />
                  <p> Bussiness Location</p>
                </li>
                <li>
                  <MDBIcon icon="phone" size="2x" className="purple-text mt-4" />
                  <p>Bussiness Number</p>
                </li>
                <li>
                  <MDBIcon icon="envelope" size="2x" className="purple-text mt-4" />
                  <p>company@example.com</p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

    );
  }
}

export default CallToActionIntro;