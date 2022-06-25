
import { CHATBOX_STYLING } from "../Actions/Chatbox"; 
import { PEOPLE_STYLING } from "../Actions/Chatbox";

const initialState = {
    style: {"display": "none", "position": `absolute`,
    "right": "20px",
    "top": "20px",
    "width":"0px",
    'height': `84%`},
    stylePeople: {"display": "none", "position": `absolute`,
    "right": "20px",
    "top": "20px",
    "width":"0px",
    'height': `84%`}
}

export const ChatboxReducers = (store = initialState, action) => {
    switch (action.type) {
        case CHATBOX_STYLING:
            return {
                ...store,
                style: action.payload
            }
        case PEOPLE_STYLING:
            return {
                ...store,
                stylePeople: action.payload
            }
        default:
            return store;
    }
}