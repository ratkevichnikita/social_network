import React from 'react';

import {connect} from "react-redux";
import {
  follow,
  isFetchingToggle,
  setTotalUsersCount,
  setUsers,
  switchPage,
  unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.isFetchingToggle(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.paginationCurrentPage}&count=${this.props.paginationTotalCount}`).then(response => {
      this.props.isFetchingToggle(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)

    })
  }

  switchPagination = (currentPage) => {
    this.props.isFetchingToggle(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.paginationTotalCount}`).then(response => {
      this.props.isFetchingToggle(false)
      this.props.setUsers(response.data.items)
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
                                                     unfollow={this.props.unfollow} /> }
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
  }
}

export default connect(mapStateToProps,
  {follow,unfollow,setUsers,setTotalUsersCount,switchPage,isFetchingToggle,})(UsersContainer);

