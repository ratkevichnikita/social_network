import classes from './Friend.module.css';

const Friend = (props) => {

  return (
    <li className={classes.item}>
      <div className={classes.image}></div>
      <p className={classes.name}>
        {props.name}
      </p>
    </li>
  )
}

export default Friend;