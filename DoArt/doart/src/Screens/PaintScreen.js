import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsPaint } from '../actions/paintActions';


function PaintScreen(props) {
    const [qty, setQty] = useState(1);
    const [original, setOriginal] = useState(1);
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
            <Link to="/">Back to Home</Link>
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
                                Status:{" "}
                                 {paint.posterQty > 0 ? "In Stock" : "Out Of Stock"}
                            </li>
                            <li>
                                Posters Qty:{''}
                                 <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(paint.posterQty).keys()].map(x =>
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                                </select>
                            </li>
                            <li>
                                Original:{''}
                                 <select value={original} onChange={(e) => setOriginal(e.target.value)}>
                                    {[...Array(paint.original).keys()].map(x =>
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                                </select>
                            </li>
                            <li>
                                {paint.posterQty > 0 ? <button onClick={handleAddToCart} className="button">Add to Cart</button>
                                    :
                                    <div>Out Of Stock</div>}

                            </li>

                        </ul>
                    </div>

                </div>

            )
        }


    </div>
}
export default PaintScreen;