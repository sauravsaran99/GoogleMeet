
export const SECOND_BOX = 'SECOND_BOX';
export const SECOND_BOX_DISPLAY = 'SECOND_BOX_DISPLAY';
export const MOBILE_DETAILS = 'MOBILE_DETAILS';

export const Secondbox = (payload) => {
    return {type: SECOND_BOX, payload}
}

export const Secondboxdisplay = (payload) => {
    return {type: SECOND_BOX_DISPLAY, payload}
}

export const MobileDetails = (payload) => {
    return {type: MOBILE_DETAILS, payload}
}