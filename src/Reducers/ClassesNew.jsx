import {
     ADD_CLASS_NEW,
    DELETE_CLASS_NEW,
    GET_CLASS_NEW,
    UPDATE_CLASS_NEW,

} from "../Action/types";

const initState = {
    classNewDetails: {
        records: [],
        record: {},
        success: null,
        error:null
    },

    classNewRecords:[],
}


export default function (state = initState, action){
    switch (action.type) {
        case GET_CLASS_NEW:
            console.log('reducer');
            return {
                ...state,
                classNewRecords: {
                    ...state.classNewRecords,
                    records: action.payload
                }
            }
        case ADD_CLASS_NEW:
            console.log('reducer class new');
            return {
                ...state,
                classNewDetails: {
                    ...state.classNewDetails,
                    record: action.payload,
                    success: "Class inserted successfully",
                    error: null
                }
            }
        case DELETE_CLASS_NEW:
            console.log('reducer');
            return {
                ...state,
                classNewDetails: {
                    ...state.classNewDetails,
                    record: state.classNewDetails.records.filter(item => item !== action.payload)
                }
            }
        case UPDATE_CLASS_NEW:
            return {
                ...state,
                classNewDetails: {
                    ...state.classNewDetails,
                    record: action.payload
                }
            }
        default:
            return state;
    }
}