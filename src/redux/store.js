import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import SidebarReducer from "./sidebarReducer";

export let store = {
  _state: {
    profilePage: {
      postsData: [
        {id:1, message: 'It\'s my first post', likes: 12},
        {id:2, message: 'Hello, World', likes: 10}
      ],
      printNewText: 'Текст по умолчанию',
    },
    messagesPage: {
      dialogsData: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Maksim'}
      ],
      messages: [
        {text: 'Hello', id: 1, name: 'Nikita'},
        {text: 'How are you?', id: 2, name: 'Nikita'},
        {text: 'Hello,Im fine! and you?', id: 3, name: 'Me'},
      ],
      enterMessage: 'Новое сообщение добавилось',
    },
    sidebar: {
      friendsData: [
        {id:1,name: 'Oleg'},
        {id:2,name: 'Maksim'},
        {id:3,name: 'Denis'},
      ]
    }
  },
  _subscriber() {
    console.log('no subscribers');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },


 dispatch(action) {
   this._state.profilePage = ProfileReducer(this._state.profilePage, action);
   this._state.messagesPage = MessagesReducer(this._state.messagesPage, action);
   this._state.sidebar = SidebarReducer(this._state.sidebar, action);

   this._subscriber(this._state);

 },

}


export default store;