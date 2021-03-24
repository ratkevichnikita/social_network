import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import SidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: MessagesReducer,
  sidebar: SidebarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;