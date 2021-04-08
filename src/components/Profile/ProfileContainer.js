import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile,updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userID = this.props.match.params.userId;

    if (!userID) {
      userID = 15909;
    }

    this.props.getProfile(userID);

  }

  render() {

    return (
      <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profileUsers,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {getProfile,updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)