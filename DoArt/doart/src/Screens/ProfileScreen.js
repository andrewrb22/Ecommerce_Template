import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {detailsUser} from "../actions/userActions.js"
export default function ProfileScreen(){
    const userSignin = useSelector((state)=> state.userSignin);
    const {userInfo} = userSignin;
    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);
    return <div></div>
}
