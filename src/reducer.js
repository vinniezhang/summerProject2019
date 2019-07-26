import {
    RECEIVE_DATA,
    REQUEST_DATA
} from "./actions"

const initialState = {
    isLoading:'',
    race:'',
    gender:'',
    degree: null,
    sat:'',
    act:'',
    state:'',
    size:'',
    financial_income:'',
    financial_aid:'',
    schools:[]
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case REQUEST_DATA:{
            return {
                ...state,
                isLoading: true,
            }
        }
        case RECEIVE_DATA:{
            // console.log("action: ", action.data);
            return {
                ...state,
                isLoading: false,
                schools: action.data
                // retrieve data from api and return to frontend
            }
        }
        default:
            return state;
    }
}
