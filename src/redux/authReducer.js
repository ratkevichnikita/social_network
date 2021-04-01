const SET_USER_AUTH = 'SET_USER_AUTH';

let initialState = {
  id: null,
  login: null,
  isLogin:false,
  isFetching: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
          ...state,
          ...action.data,
          isLogin: true,
        }
    default:
      return state

  }
}

export const setAuthData = (data) => ({type:SET_USER_AUTH, data});

export default authReducer;