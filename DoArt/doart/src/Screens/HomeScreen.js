import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

function HomeScreen(props) {

    const [paintings, setpaint] = useState([]);
    
    useEffect(() => {
        const fetchData = async () =>{
            const {data} = await axios.get("/api/paint");
            setpaint(data);
        }
        fetchData();
        return () => {
            
        };
    }, [])

    return <ul className="paintings">
        {
            paintings.map(paint =>
                <li>
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