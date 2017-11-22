import { combineReducers } from 'redux';
import chats from './chats';

const chatApp = combineReducers({
    chats
});

export default chatApp;