import { ActionTypes } from "./types";

const initialState: object = {
    username: "",
    password: ""
}

const reducer = (action: any) => {
    switch(action.type) {
        case ActionTypes.LOGGING_IN:
            return { ...initialState, username: action.payload };
        default:
            return initialState;
    }
}

export default reducer;
