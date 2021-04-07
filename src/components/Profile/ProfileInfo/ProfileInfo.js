import classes from './Profile.module.css';
import defaulphoto from '../../Users/images/user.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  return (
      <div className={classes.user}>
        <div>
          <img src={props.profile.photos.small ? props.profile.photos.small : defaulphoto} alt=""/>
          <p>
            {props.profile.fullName}
          </p>
        </div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
  );
};

export default ProfileInfo;