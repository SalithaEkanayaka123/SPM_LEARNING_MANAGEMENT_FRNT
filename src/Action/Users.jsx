import {
    ADD_USER,
    GET_USER,
    UPDATE_USER,
    DELETE_USER,
    FETCH_USERS,
    VALID_USER,
    ERROR_USER,
    GET_USER_COUNT, LOGOUT_USER, GET_TEACHER_STATUS_COUNT
} from "./types";
import axios from "axios";
import * as api from '../API'
import {useDispatch} from "react-redux";



export const fetchStudents = () => dispatch => {
    axios.get(api.baseURL + 'students')
        .then(response => {
            dispatch({
                type: FETCH_USERS,
                payload: response
            })}

        ).catch((err) => {

        console.log(err);
    })
}

export const fetchTeachers = () => dispatch => {
    axios.get(api.baseURL + '/teachers')
        .then(response => {
            dispatch({
                type: FETCH_USERS,
                payload: response
            })}

        ).catch((err) => {

        console.log(err);
    })
}

// const { user } = useSelector((store) => store?.user);
export const fetchUser = () => dispatch => {
    axios.get(api.baseURL + '/users')//api.baseURL + 'deleteuser'
        .then(response => {
            dispatch({
                type: FETCH_USERS,
                payload: response
            })}
        ).catch((err) => {
        console.log(err);
    })
}

export const addUsers = (PostData) => async (dispatch) => {
    try {
        const response = await axios.post(api.baseURL + 'useradd', PostData)
        if (response.status === 200) {
            if (response.data === 'username exists'){
                dispatch({
                    type: ERROR_USER,
                    payload: response.data
                })
            }else if (response.data.username != null){

                dispatch({
                    type: ADD_USER,
                    payload: response.data
                })
            }

        } else {
            dispatch({
                type: ERROR_USER,
                payload: response.data
            })
        }

    }catch(err) {
        console.log(err);
    }

}

export const deleteUsers = (id) => dispatch => {
    axios.delete(api.baseURL + 'deleteuser/'+ id)
        .then(response => {
                dispatch({
                    type: DELETE_USER,
                    payload: id
                })
                // alert("data deleted sucessfully");
            }

        ).catch((err) => {
        console.log(err);
    })
}

export const getUserByID = (id) => dispatch => {
    axios.get(api.baseURL + 'getsingleuser/'+ id)
        .then(response => {
                dispatch({
                    type: GET_USER,
                    payload: response
                })
            }

        ).catch((err) => {
        console.log(err);
    })
}

export const loggedUser = (PostData) => dispatch => {
    dispatch({type: VALID_USER, payload: PostData });
}

export const logoutUser = () => dispatch => {
    dispatch({type: LOGOUT_USER, payload: {} });
}


export const upDateUser = (id, PostData) => dispatch => {
    axios.put(api.baseURL + 'updateuser/' + id , PostData)
        .then(response => {
            if(response.status === 200){
                dispatch({
                    type: UPDATE_USER,
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

export const getUserCount = () => dispatch => {
    axios.get(api.baseURL + 'usercount/')
        .then(response => {
                dispatch({
                    type: GET_USER_COUNT,
                    payload: response
                })
            }

        ).catch((err) => {
        console.log(err);
    })
}

export const getTeacherStatusCount = () => dispatch => {
    axios.get(api.baseURL + 'teachercount/')
        .then(response => {
                dispatch({
                    type: GET_TEACHER_STATUS_COUNT,
                    payload: response
                })
            }

        ).catch((err) => {
        console.log(err);
    })
}