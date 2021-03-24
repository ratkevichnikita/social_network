import classes from './Dialogs.module.css';

import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Mesage/Message';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map(d => <DialogsItem key={d.id} id={d.id} name={d.name}/>);
  let messagesElements = props.state.messages.map(m => <Message key={m.id} name={m.name} text={m.text}/>);

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
          <textarea placeholder='Введите сообщение' className={classes.enterMessage} cols="3" rows="3"></textarea>
          <button className={classes.messagesBtn}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;