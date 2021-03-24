import classes from './Profile.module.css';

const ProfileInfo = (props) => {
  return (
      <div className={classes.user}>
        <img src={props.profile.photos.small} alt=""/>
        <p>
          {props.profile.fullName}
        </p>
      </div>
  );
};

export default ProfileInfo;