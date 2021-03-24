
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SWITCH_PAGE = 'SWITCH_PAGE';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
      users: [],
      paginationTotalCount: 20,
      paginationTotalUsers: 0,
      paginationCurrentPage: 1,
      isFetching: false,
    };

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [...state.users].map(u => {
          if(u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
       users: [...state.users].map(u => {
         if(u.id === action.userId) {
           return {...u, followed: false}
         }
         return u;
    })
      }
    case SET_USERS:
      return {...state, users: [...action.users]}
    case SET_TOTAL_USERS_COUNT:
      return {...state, paginationTotalUsers: action.totalCount}
    case SWITCH_PAGE:
      return {...state, paginationCurrentPage: action.currentPage}
    case IS_FETCHING:
      return  {...state, isFetching: action.isFetching}
    default:
      return state
  }
}

export const follow = (userId) => ({type: FOLLOW, userId });
export const unfollow = (userId) => ({type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const switchPage = (currentPage) => ({type: SWITCH_PAGE, currentPage});
export const isFetchingToggle = (isFetching) => ({type: IS_FETCHING, isFetching});

export default  userReducer;