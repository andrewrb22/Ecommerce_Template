import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsPaint } from '../actions/paintActions';


function PaintScreen(props) {
    const [qty, setQty] = useState(1);
    const paintDetails = useSelector(state => state.paintDetails);
    const { paint, loading, error } = paintDetails;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(detailsPaint(props.match.params.id));
        return () => {
            //
        };
    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return <div>
        <div className="backtohome">
            <Link to="/shop">Back to Home</Link>
        </div>
        {loading ? <div>Loading... </div> :
            error ? <div>{error}</div> : (

                <div className="details">
                    <div className="details-image">
                        <img src={paint.images} alt="paint"></img>
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                            <b> <h4>Name: {paint.name}</h4></b>
                            </li>
                            <li> Category: <b> 
                                
                              {paint.category}</b>
                            </li>
                       
                            <li>
                                Price:<b> ${paint.price}</b>
                            </li>
                           
                            <li>
                                Status:{" "}
                                 {paint.Qty > 0 ? "In Stock" : "Out Of Stock"}
                            </li>
                            <li>
                                Posters Qty:{''}
                                 <select 
                                 value={qty}
                                  onChange={(e) => {setQty(e.target.value)}}>
                                    {[...Array(paint.Qty).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                            </option>
                                            ))}
                                </select>
                            </li>
                            <li>
                                {paint.Qty > 0 && ( 
                                <button 
                                onClick={handleAddToCart}
                                 className="button primery"
                                 >Add to Cart
                                 </button>
                                    
                                   )}

                            </li>
                        </ul>
                    </div>
                    {/* <div className="details-action">
                        <ul>
                           

                        </ul>
                    </div> */}

                </div>

            )
        }


    </div>
}
export default PaintScreen;