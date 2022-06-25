import { ChatboxReducers } from './Reducers/ChatboxReducers';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { MobileReducers } from './Reducers/MobileReducers';


const rootReducer = combineReducers({
    ChatboxReducers: ChatboxReducers,
    MobileReducers: MobileReducers
});

export const store = createStore(rootReducer);