import classes from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Myposts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {

  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.profile}>
      <img
        src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
        alt=""/>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;