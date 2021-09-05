import {ADD_PAYMENT,GET_PAYMENT} from "../Action/types";

const initialState = {
    paymentDetails: {
        records: [],
        record: {},
        success: null,
        error: null
    },
}

export default function (state = initialState, action){
    switch (action.type) {
        case GET_PAYMENT:
            console.log('reducer');
            return {
                ...state,
                paymentDetails: {
                    ...state.paymentDetails,
                    records: action.payload
                }
            }
        case ADD_PAYMENT:
            console.log('reducer');
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    record: action.payload,
                    success: "payment inserted successfully",
                    error: null
                }
            }
        default:
            return state;
    }
}