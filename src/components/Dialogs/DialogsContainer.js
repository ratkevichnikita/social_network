import {addMessageActionCreator, printMessageActionCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    enterMessage: state.messagesPage.enterMessage,
    dialogsData: state.messagesPage.dialogsData,
    messages: state.messagesPage.messages,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    printNewMessage: (txt) => {
      let action = printMessageActionCreator(txt);
      dispatch(action);
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)