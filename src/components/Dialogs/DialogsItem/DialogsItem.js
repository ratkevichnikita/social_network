import classes from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => {
  return (
      <li className={classes.dialogsItem}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </li>
  )
}

export default DialogsItem;