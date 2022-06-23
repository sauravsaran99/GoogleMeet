
import { SECOND_BOX } from "../Actions/Secondbox";
import { SECOND_BOX_DISPLAY } from "../Actions/Secondbox";
import { MOBILE_DETAILS } from "../Actions/Secondbox";

const initialState = {
    display: 'none',
    width: '0%',
    mobile: 'none'
}

export const SecondBoxReducer = (store = initialState, action) => {
    switch (action.type) {
        case SECOND_BOX:
            return {
                ...store, display: action.payload,
            }

        case SECOND_BOX_DISPLAY:
            return {
                ...store, width: action.payload,
            }

        case MOBILE_DETAILS:
            return {
                ...store, mobile: action.payload,
            }

        default:
            return store;
    }
}