import Navbar from './Navbar/Navbar';

import Friends from './Friends/Friends';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    friendsData: state.sidebar.friendsData
  }
}

const SidebarContainer = connect(mapStateToProps)(Navbar,Friends);

export default SidebarContainer;