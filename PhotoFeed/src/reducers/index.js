import { combineReducers } from 'redux';
import PhotoReducers from './photos-reducer';

const rootReducer = combineReducers({
    photos: PhotoReducers,
});

export default rootReducer;