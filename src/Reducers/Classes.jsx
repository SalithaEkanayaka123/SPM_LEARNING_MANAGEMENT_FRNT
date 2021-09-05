import {
    ADD_CLASS,
    DELETE_CLASS,
    GET_CLASS,
    UPDATE_CLASS,

} from "../Action/types";

const initState = {
    classDetails: {
        records: [],
        record: {},
        success: null,
        error:null
    },

    classRecords:[],
}


export default function (state = initState, action){
    switch (action.type) {
        case GET_CLASS:
            console.log('reducer');
            return {
                ...state,
                classRecords: {
                    ...state.classRecords,
                    records: action.payload
                }
            }
        case ADD_CLASS:
            console.log('reducer');
            return {
                ...state,
                classDetails: {
                    ...state.classDetails,
                    record: action.payload,
                    success: "Class inserted successfully",
                    error: null
                }
            }
        case DELETE_CLASS:
            console.log('reducer');
            return {
                ...state,
                classDetails: {
                    ...state.classDetails,
                    record: state.classDetails.records.filter(item => item !== action.payload)
                }
            }
        case UPDATE_CLASS:
            return {
                ...state,
                classDetails: {
                    ...state.classDetails,
                    record: action.payload
                }
            }
        default:
            return state;
    }
}