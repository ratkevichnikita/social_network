const ADD_MESSAGE = 'ADD-MESSAGE';
const PRINT_MESSAGE = 'PRINT-MESSAGE';

let initialState = {
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
  enterMessage: '',
}

const MessagesReducer = (state = initialState,action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        enterMessage: '',
        messages: [...state.messages, {text: state.enterMessage, id: 1,name: 'Nikita',}],
      };
    case PRINT_MESSAGE:
      return {
        ...state,
        enterMessage: action.newMessage,
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE,})

export const printMessageActionCreator = (txt) => ({type: PRINT_MESSAGE, newMessage: txt,})

export default MessagesReducer;