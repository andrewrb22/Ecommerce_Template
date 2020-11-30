import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data'

function HomeScreen(props) {
    return <ul className="paintings">
        {
            data.paintings.map(paint =>
                <li>
                    <div className="paint">
                        <Link to={'/paintings/' + paint._id}> <img className="paint-image" src={paint.images} alt="paint1" /></Link>
                        <div className="paint-name">
                            <Link to={'/paintings/' + paint._id}>Name: {paint.name}</Link> </div>
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