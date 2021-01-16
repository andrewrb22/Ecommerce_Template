import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from "../actions/userActions.js"
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";



export default function ProfileScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);
    const submitHandler = (e) => {
        e.preventDefault();

    };
    return (<div>
        <form className="form"
            onSubmit={submitHandler}>
            <div>
                <h1>User Profile</h1>
            </div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input id="name"
                                    type="text"
                                    placeholder="Enter Name"
                                    value={user.name}
                                  
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input id="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    value={user.email}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input id="password"
                                    type="password"
                                    placeholder="Enter Password"
                                    value={user.password}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input id="confirmPassword"
                                    type="password"
                                    placeholder="Enter Confirm Password"
                                ></input>
                            </div>
                            <div>
                                <label>
                                    <button className="primary" type="submit">
                                        Update
                                    </button>
                                </label>
                            </div>





                        </>
                    )
            }
        </form>
    </div>)
}
