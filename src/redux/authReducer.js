const SET_USER_AUTH = 'SET_USER_AUTH';

let initialState = {
  userID: null,
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
        }
    default:
      return state

  }
}

export const setAuthData = (userID,login,email) => ({type:SET_USER_AUTH, data:{userID,login,email}});

export default authReducer;