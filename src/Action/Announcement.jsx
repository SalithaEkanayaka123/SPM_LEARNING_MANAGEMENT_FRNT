import * as api from "../API";
import {ADD_ANNOUNCEMENT, ADD_CLASS, GET_ANNOUNCEMENT, GET_CLASS} from "./types";
import axios from "axios";

export const addAnnouncement = (Announcement) => async (dispatch) => {
    try{
        const { data } = await api.createAnnouncement(Announcement);
        dispatch({type: ADD_ANNOUNCEMENT, payload: data });
        // alert("data added successfully");
    } catch (error){
        console.log(error);
    }
}

export const getAnnouncements = () => dispatch => {
    axios.get(api.baseURL + 'announcements')
        .then(response => {
            dispatch({
                type: GET_ANNOUNCEMENT,
                payload: response.data
            })}
        ).catch((err) => {
        console.log(err);
    })
}