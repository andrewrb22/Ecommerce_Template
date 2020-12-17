import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBCardBody,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBJumbotron,
    MDBBtn,
    MDBView,
    MDBInput,
    MDBContainer,
    MDBCardTitle,


    MDBCardText,
    MDBIcon
} from 'mdbreact';
import { Link } from 'react-router-dom'
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
                                    <Link to='/' className=" text-white">Shop Now!</Link>
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>

                
<div>
               
                    <MDBRow>
                        <MDBCol>
                            <MDBJumbotron className="text-center" style={{ backgroundColor: '#c77dff' }} >
                                <MDBCardTitle className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                                    <strong>About The Bussiness</strong>
                                </MDBCardTitle>
                                <MDBCardText>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>
                               
                                    <img
                                        src="https://yourlightingbrand.com/wp-content/uploads/sites/30/2017/05/logo-placeholder.jpg"
                                        alt=""
                                        className="rounded-circle z-depth-1 img-fluid"
                                    />
                               
                                <MDBCardBody>
                                    <MDBCardTitle className="black-text h5 m-4">
                                       Follow Us
              </MDBCardTitle>


                                    <MDBCol className="d-flex justify-content-center mt-4" md="12">
                                        <MDBCol md="3" className="d-flex justify-content-around">
                                            <a href="#"><MDBIcon
                                                fab
                                                icon="linkedin-in"
                                                className="purple-text"
                                                size="lg"
                                            /></a>
                                            <a href="#"><MDBIcon
                                                fab
                                                icon="twitter"
                                                className="purple-text"
                                                size="lg"
                                            /></a>
                                            <a href="#"><MDBIcon
                                                fab
                                                icon="facebook-f"
                                                className="purple-text"
                                                size="lg"
                                            /></a>
                                        </MDBCol>
                                    </MDBCol>

                                </MDBCardBody>
                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                
                </div>
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