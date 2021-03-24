import * as React from "react";

import {addMessageActionCreator, printMessageActionCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
  return {
    enterMessage: state.messagesPage.enterMessage,
    dialogsData: state.messagesPage.dialogsData,
    messages: state.messagesPage.messages,
  }
}

let mapDispatchToProps = (dispatch) =>{
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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;