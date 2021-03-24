const ADD_POST = 'ADD-POST';
const NEW_TEXT = 'NEW-TEXT';
const SET_PROFILE_USERS = 'SET_PROFILE_USERS';

let initialState = {
  postsData: [
    {id:1, message: 'It\'s my first post', likes: 12},
    {id:2, message: 'Hello, World', likes: 10}
  ],
  printNewText: '',
  profileUsers: null,
}

const ProfileReducer = (state = initialState, action) => {

  switch (action.type) {
    case  ADD_POST:
      return {
        ...state,
        postsData: [...state.postsData, {id: 5,message: state.printNewText,likes: 0,}],
        printNewText: '',
      };
    case NEW_TEXT:
      return {
        ...state,
        printNewText: action.newText,
      };
    case SET_PROFILE_USERS:
      return {
        ...state,
        profileUsers: action.profile,
      }
    default :
        return state;
  }

};

export const addPostActionCreator = () => ({type: ADD_POST});

export const newValueForPostActionCreator = (text) => ({type: NEW_TEXT, newText: text,});

export const setProfileUsers = (profile) => ({type: SET_PROFILE_USERS, profile});

export default ProfileReducer;