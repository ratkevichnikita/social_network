import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import SidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: MessagesReducer,
  sidebar: SidebarReducer,
  usersPage: usersReducer,
  auth:authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;