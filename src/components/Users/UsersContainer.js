import React from 'react';

import {connect} from "react-redux";
import {
  follow, getUsers, isFollow,
  isFollowingInProgressToggle, isUnFollow,
  switchPage,
  unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.paginationCurrentPage, this.props.paginationTotalCount)
  }

  switchPagination = (currentPage) => {
    this.props.getUsers(currentPage, this.props.paginationTotalCount)
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : <Users switchPagination={this.switchPagination}
                                                     paginationTotalUsers={this.props.paginationTotalUsers}
                                                     paginationTotalCount={this.props.paginationTotalCount}
                                                     paginationCurrentPage={this.props.paginationCurrentPage}
                                                     users={this.props.users}
                                                     follow={this.props.follow}
                                                     unfollow={this.props.unfollow}
                                                     followingInProgress={this.props.followingInProgress}
                                                     isFollowingInProgressToggle={this.props.isFollowingInProgressToggle}
                                                     isUnFollow={this.props.isUnFollow}
                                                     isFollow={this.props.isFollow}

      /> }
    </>
  }
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    paginationTotalUsers: state.usersPage.paginationTotalUsers,
    paginationTotalCount: state.usersPage.paginationTotalCount,
    paginationCurrentPage: state.usersPage.paginationCurrentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps,{follow,unfollow,
                       switchPage, isFollow, isUnFollow,
                      isFollowingInProgressToggle,getUsers})(UsersContainer);

