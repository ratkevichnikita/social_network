import * as React from "react";

import classes from './Dialogs.module.css';

import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Mesage/Message';


const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map(d => <DialogsItem key={d.id} id={d.id} name={d.name}/>);
  let messagesElements = props.messages.map(m => <Message key={m.id} name={m.name} text={m.text}/>);

  let enterMessage = React.createRef();

  let onAddMessage = () => {
    props.addMessage()
  }

  let onPrintNewMessage = () => {
    let txt = enterMessage.current.value;
    props.printNewMessage(txt);
  }

  return (
    <div className={classes.dialogs}>
      <h3>Dialogs</h3>
      <div className={classes.dialogsInner}>
        <ul className={classes.dialogsList}>
          {dialogsElements}
        </ul>
        <div className={classes.messagesWrapper}>
          <ul className={classes.messages}>
            {messagesElements}
          </ul>
          <textarea ref={enterMessage} onChange={onPrintNewMessage} value={props.enterMessage} className={classes.enterMessage} />
          <button className={classes.messagesBtn} onClick={onAddMessage} >Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;