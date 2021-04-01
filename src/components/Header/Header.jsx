import classHeader from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
      <header className={classHeader.header}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="Description"/>
        {props.isLogin
          ? <NavLink to="./">{'Hello, ' + props.login} </NavLink>
          : <NavLink to="./">Логин</NavLink>}
      </header>
  )
};

export default Header;