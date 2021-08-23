import * as api from "../API";
import {ADD_CLASS,GET_CLASS} from "./types";
import axios from "axios";

export const addClass = (Class) => async (dispatch) => {
    console.log('creating');
    console.log('creating',Class);
    try{
        const { data } = await api.createClass(Class);
        dispatch({type: ADD_CLASS, payload: data });
        alert("data added successfully");
    } catch (error){
        console.log(error);
    }
}

export const getClasses = () => dispatch => {
    console.log('fetching');
    axios.get(api.baseURL + 'classes/')
        .then(response => {
            dispatch({
                type: GET_CLASS,
                payload: response.data
            })}
        ).catch((err) => {
        console.log(err);
    })
}