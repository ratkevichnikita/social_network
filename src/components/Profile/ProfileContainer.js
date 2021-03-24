import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileUsers} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {

  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {

      this.props.setProfileUsers(response.data)

    })
  }

  render() {
    return (
      <Profile {...this.props} />
    )
  }

}

let mapStateToProps = (state) => ({

    profile: state.profilePage.profileUsers,

});

export default connect(mapStateToProps,{setProfileUsers})(ProfileContainer);