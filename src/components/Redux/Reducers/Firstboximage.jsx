
import { FIRST_BOX_IMAGE_REQUEST } from "../Actions/Firstboximage";

const initialState = {
    data: 1,
}

export const FirstBoxImageReducer = (store = initialState, action) => {
    switch (action.type) {
        case FIRST_BOX_IMAGE_REQUEST:
            return {
                ...store, data: action.payload,
            }

        default:
            return store;
    }
}