
export const CHATBOX_STYLING = 'CHATBOX_STYLING';

export const PEOPLE_STYLING = 'PEOPLE_STYLING';

export const chatboxStyling = (payload) => {
    return {
        type: CHATBOX_STYLING, payload
    }
}

export const peopleStyling = (payload) => {
    return {
        type: PEOPLE_STYLING, payload
    }
}