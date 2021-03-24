import classes from '../Dialogs.module.css';

const Message = (props) => {
  return  (
      <li className={classes.messagesItem}>
        <div className={classes.messagesUser}>
          <div className={classes.messagesImage}>Avatar</div>
          <p>{props.name}</p>
        </div>
        <div className={classes.messagesText}>
          {props.text}
        </div>
      </li>
  )
}

export default Message;