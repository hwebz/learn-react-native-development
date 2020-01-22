import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication-reducer';
import IdeaPadReducer from './ideapad-reducer';
import IdeasReducer from './ideas-reducer';

export default combineReducers({
    auth: AuthenticationReducer,
    idea: IdeaPadReducer,
    ideas: IdeasReducer
})