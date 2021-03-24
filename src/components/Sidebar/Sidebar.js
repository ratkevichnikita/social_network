import classes from './Sidebar.module.css'
import SidebarContainer from "./SidebarContainer";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
     <SidebarContainer />
    </div>
  )
}

export default Sidebar;