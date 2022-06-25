import { MOBILE_DISPLAY } from "../Actions/Mobile";

const initialState = {
    display: "none",
}

export const MobileReducers = (store = initialState, action) => {
    switch (action.type) {
        case MOBILE_DISPLAY:
            return {
                ...store,
                display: action.payload
            }
        default:
            return store;
    }
}