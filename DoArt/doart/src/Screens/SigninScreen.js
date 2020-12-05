import { sign } from 'jsonwebtoken';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    
    useEffect(() => {
       
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(signin(email, password));
       

    }
    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    <label htmlFor="email">
                        Email
          </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Signin</button>
                </li>
                <li>
                    New to DoArt?
        </li>
                <li>
                    <Link to="/register" className="button secondary text-center" >Create your DoArt account</Link>
                </li>
            </ul>
        </form>
    </div>
}
export default SigninScreen;