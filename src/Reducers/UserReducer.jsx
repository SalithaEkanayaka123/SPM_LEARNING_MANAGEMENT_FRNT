import {
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    GET_USER,
    FETCH_USERS,
    VALID_USER,
    ERROR_USER,
    GET_USER_COUNT, LOGOUT_USER, GET_TEACHER_STATUS_COUNT
} from "../Action/types";

const initialState = {
    UserDetails: {
        records: [],
        record: [],
        success: null,
        error: null,
        usercount: [],
        teachercount: []
    },
    editDetail: [],
    loginUser: {},
    error: null
}

export default function (state = initialState, action){
    console.log('reducer', action.payload);
    console.log('reducer1', action.type);
    switch (action.type) {
        case FETCH_USERS:
            console.log('reducer');
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    records: action.payload,
                    error: action.error
                }
            }
        case ADD_USER:
            console.log('reducer');
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    record: action.payload,
                    success: "User inserted successfully"
                },
                error: action.error
            }
        case DELETE_USER:
            console.log('reducer');
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    record: state.UserDetails.records.data.filter(item => item !== action.payload),
                    error: action.error
                }
            }
        case GET_USER:
            return {
                ...state,
                editDetail: action.payload
            }
        case VALID_USER:
            console.log('reducer');
            console.log('reducer1 ',action.payload);
            return {
                ...state,
                loginUser: action.payload
            }
        case LOGOUT_USER:
            console.log('reducer');
            console.log('reducer1 ',action.payload);
            return {
                ...state,
                loginUser: {}
            }
        case UPDATE_USER:
            console.log('reducer', action.payload);
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    record: action.payload
                }
            }
        case ERROR_USER:
            console.log('reducer2222', action.payload);
            return {
                error: action.payload

            }
        case GET_USER_COUNT:
            console.log('reducer2222', action.payload);
            return {
                usercount: action.payload

            }

        default:
            return state;
    }
}