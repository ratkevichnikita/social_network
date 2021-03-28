import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileUsers} from "../../redux/profileReducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userID = this.props.match.params.userId;

    if(!userID) {
      userID = 2;
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userID ).then(response => {

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

let WithRouteProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setProfileUsers})(WithRouteProfileContainer);