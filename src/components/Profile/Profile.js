import classes from './Profile.module.css';

import Myposts from './Myposts/Mypostats';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <img
        src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
        alt=""/>
      <ProfileInfo/>
      <Myposts postsData={props.state.postsData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;