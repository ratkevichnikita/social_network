import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const NEW_TEXT = 'NEW-TEXT';
const SET_PROFILE_USERS = 'SET_PROFILE_USERS';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postsData: [
    {id:1, message: 'It\'s my first post', likes: 12},
    {id:2, message: 'Hello, World', likes: 10}
  ],
  printNewText: '',
  profileUsers: null,
  status: '',
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
      case SET_STATUS:
        return {
          ...state,
          status: action.status
        }
    default :
        return state;
  }

};

export const addPostActionCreator = () => ({type: ADD_POST});

export const newValueForPostActionCreator = (text) => ({type: NEW_TEXT, newText: text,});

export const setProfileUsers = (profile) => ({type: SET_PROFILE_USERS, profile});

export const setProfileStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userID) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userID).then(response => {
      dispatch(setProfileUsers(response.data))
    })
  }
}

export const setStatus = (userID) => {
  return (dispatch) => {
    profileAPI.getStatus(userID).then(response => {
      dispatch(setProfileStatus(response.data))
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.getStatus(status).then(response => {
      if(response.data.resultcode === 0) {
        dispatch(setProfileStatus(status))
      }

    })
  }
}

export default ProfileReducer;