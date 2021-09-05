import * as api from "../API";
import {ADD_PAYMENT, GET_PAYMENT} from "./types";
import axios from "axios";

export const addPayment = (PostData) => async (dispatch) => {
    console.log('addPayment creating');
    try{
        const { data } = await api.createPayment(PostData);
        dispatch({type: ADD_PAYMENT, payload: data });
    } catch (error){
        console.log(error);
    }
}


export const getallTransactions = () => dispatch => {
    console.log(' getallTransactions fetching');
    axios.get(api.baseURL + 'payment')
        .then(response => {
            dispatch({
                type: GET_PAYMENT,
                payload: response.data
            })}
        ).catch((err) => {
        console.log(err);
    })
}