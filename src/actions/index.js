import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
    //const response = await axios.post('http://localhost:3090/signup', formProps); => 이건 서버가 없어서 못함.

    console.log("action!");
    console.log(formProps);
    try {
        dispatch({
            type: AUTH_USER,
            payload: 'tototoken'
        });
        localStorage.setItem('token', 'tototoken');
        callback();
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Email in use'
        })
    }
    
};

export const signout = () => {
    localStorage.clear();

    return {
        type: AUTH_USER,
        payload: ''
    }
};

export const signin = (formProps, callback) => async dispatch => {
    //const response = await axios.post('http://localhost:3090/signin', formProps); => 이건 서버가 없어서 못함.

    console.log("action!");
    console.log(formProps);
    try {
        dispatch({
            type: AUTH_USER,
            payload: 'tototoken'
        });
        localStorage.setItem('token', 'tototoken');
        callback();
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Invalid login credentials'
        })
    }
    
};
