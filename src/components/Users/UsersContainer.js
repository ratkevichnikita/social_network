import React from 'react';

import {connect} from "react-redux";
import {
  follow, getUsersThunkCreator,
  isFetchingToggle,
  isFollowingInProgressToggle,
  setTotalUsersCount,
  setUsers,
  switchPage,
  unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator()
    // this.props.isFetchingToggle(true);
    // usersAPI.getUsers(this.props.paginationCurrentPage, this.props.paginationTotalCount).then(data => {
    //   this.props.isFetchingToggle(false)
    //   this.props.setUsers(data.items)
    //   this.props.setTotalUsersCount(data.totalCount)
    //
    // })
  }

  switchPagination = (currentPage) => {
    this.props.isFetchingToggle(true);
    usersAPI.getUsers(currentPage, this.props.paginationTotalCount).then(data => {
      this.props.isFetchingToggle(false)
      this.props.setUsers(data.items)
    })
    this.props.switchPage(currentPage)
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
                                                     isFollowingInProgressToggle={this.props.isFollowingInProgressToggle}/> }
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

export default connect(mapStateToProps,{follow,unfollow,setUsers,
                      setTotalUsersCount, switchPage,isFetchingToggle,
                      isFollowingInProgressToggle,getUsersThunkCreator})(UsersContainer);

