import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import{listPaintings} from '../actions/paintActions'
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip } from 'mdbreact';



function HomeScreen(props) {

   
    const paintList = useSelector(state => state.paintList);
    const { paintings, loading, error} = paintList;
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(listPaintings());
        return () => {
            
        };
    }, [])

    return loading ? <div>Loading...</div>:
error? <div>{error}</div>:
<section >
<h2 className='h1-responsive black-text font-weight-bold text-center my-5'>Our bestsellers</h2>
<p className='black-text text-center font-weight-bold w-responsive mx-auto mb-5'>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
  totam voluptas nostrum quisquam eum porro a pariatur veniam.
</p>
    <ul className="paintings">
        {
             paintings.map(paint =>
                <li key={paint._id}>
                     <MDBCol lg='6' md='12' className='mb-lg-0 mb-6'>
                   <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={paint.images}
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href={'/paint/' + paint._id} className='text-muted'>
                <h5>Product</h5>
              </a>
              <MDBCardTitle>
                <strong>
                <Link to={'/paint/' + paint._id}> {paint.name}</Link>
                </strong>
              </MDBCardTitle>
              <MDBCardText> {paint.description}</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>${paint.price}</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
 
                </li>
            )
        }


    </ul>
    </section>
}
export default HomeScreen;