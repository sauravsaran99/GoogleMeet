
import { FirstBoxImageReducer } from '../Redux/Reducers/Firstboximage';
import { SecondBoxReducer } from './Reducers/Second';
import { createStore } from 'redux';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    firstBoxImage: FirstBoxImageReducer,
    secondBox: SecondBoxReducer,
});

export const store = createStore(rootReducer);