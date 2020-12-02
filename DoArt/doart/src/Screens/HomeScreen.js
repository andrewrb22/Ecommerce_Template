import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import{listPaintings} from '../actions/paintActions'



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
    <ul className="paintings">
        {
             paintings.map(paint =>
                <li key={paint._id}>
                    <div className="paint">
                        <Link to={'/paint/' + paint._id}>
                         <img className="paint-image" src={paint.images} alt="paint1" />
                         </Link>
                        <div className="paint-name">
                            <Link to={'/paint/' + paint._id}>Name: {paint.name}</Link> </div>
                        <div className="paint-brand">Collection: {paint.category}</div>
                        <div className="paint-price">Price: ${paint.price}</div>
                        <div className="paint-rating">{paint.rating}</div>
                    </div>
                </li>
            )
        }


    </ul>
}
export default HomeScreen;