import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function PaintScreen(props){
    const paint = data.paintings.find(x=> x._id === props.match.params.id);

    return <div >
        <div className="backtohome">
            <Link to="/">Back to Home</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={paint.images} alt="paint"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                    <h4>Name: {paint.name}</h4>
                    </li>
                    <li> Collection:
                        {paint.category}
                    </li>
                    <li className="bestseller"> BestSeller
                        {paint.bestseller}
                    </li>
                    <li> 
                    Price:<b> ${paint.price}</b>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                      Price: <b>${paint.price} </b> 
                    </li>
                    <li>
                        Status: {paint.status}
                    </li>
                    <li>
                       Type: <select>
                           <option>Poster</option>
                           <option>Cards(4X6)</option>
                           <option>Sticker</option>
                           </select> 
                    </li>
                    <li>
                        <button className="button">Add to Cart</button>
                    </li>

                </ul>
            </div>

        </div>
        
    </div>
}
export default PaintScreen;