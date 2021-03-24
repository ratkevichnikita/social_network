import classes from './Friends.module.css';
import Friend from './Friend/Friends';

const Friends = (props) => {
let friend = props.friendsData.map(f => <Friend key={f.id} name={f.name} />)

  return (
    <div className={classes.friends}>
      <h3>
        Friends
      </h3>
      <ul className={classes.list}>
        {friend}
      </ul>
    </div>
  )
}

export default Friends;