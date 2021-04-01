import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials:true
    }).then(response => {
      if(response.data.resultCode === 0) {
        this.props.setAuthData(response.data.data)
      }
    })
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
    login: state.auth.login,
  }

}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);
