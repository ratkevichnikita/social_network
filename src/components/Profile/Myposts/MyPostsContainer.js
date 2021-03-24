import React from 'react';

import {addPostActionCreator, newValueForPostActionCreator} from "../../../redux/profileReducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
   return {
    postsData: state.profilePage.postsData,
    printNewText: state.profilePage.printNewText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    newValueForPost: (text) => {
      let action = newValueForPostActionCreator(text);
      dispatch(action)
    },
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts);


export default MyPostsContainer;