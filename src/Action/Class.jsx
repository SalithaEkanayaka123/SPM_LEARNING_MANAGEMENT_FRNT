import * as api from "../API";
import {ADD_CLASS, ADD_CLASS_NEW, DELETE_CLASS, GET_CLASS, GET_CLASS_NEW, UPDATE_CLASS, UPDATE_USER} from "./types";
import axios from "axios";

export const addClass = (Class) => async (dispatch) => {
    try{
        const { data } = await api.createClass(Class);
        dispatch({type: ADD_CLASS, payload: data });
        // alert("data added successfully");
    } catch (error){
        console.log(error);
    }
}

export const addClassNew = (Class) => async (dispatch) => {
    console.log('creating');
    console.log('creating',Class);
    try{
        const { data } = await api.createClassNew(Class);
        dispatch({type: ADD_CLASS_NEW, payload: data });
        // alert("data added successfully");
    } catch (error){
        console.log(error);
    }
}

export const getClasses = () => dispatch => {
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

export const getClassesNew = () => dispatch => {
    console.log('fetching');
    axios.get(api.baseURL + 'images/')
        .then(response => {
            dispatch({
                type: GET_CLASS_NEW,
                payload: response.data
            })}
        ).catch((err) => {
        console.log(err);
    })
}

export const deleteClasses = (id) => dispatch => {
    axios.delete(api.baseURL + 'deleteclass/'+ id)
        .then(response => {
                dispatch({
                    type: DELETE_CLASS,
                    payload: id
                })
            }

        ).catch((err) => {
        console.log(err);
    })
}

export const updateClass = (id, PostData) => dispatch => {
    axios.put(api.baseURL + 'class/' + id , PostData)
        .then(response => {
            if(response.status === 200){
                dispatch({
                    type: UPDATE_CLASS,
                    payload: response.data
                })
            }
            else{
                console.log('error123')
            }
        })
        .catch((err) => {
            console.log(err);
        })
}