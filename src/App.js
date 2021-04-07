import './App.css';


// components - start
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from './components/News/News';
import Sidebar from './components/Sidebar/Sidebar';
import Login from "./components/Login/Login";
// components - end

import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';



const App = () => {
  return (

      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Sidebar />
          <div className="app-wrapper-content">
            <Route path='/profile/:userId?' render={() => <ProfileContainer /> } />
            <Route path='/dialogs' render={() => <DialogsContainer /> } />
            <Route path='/users' render={() => <UsersContainer /> } />
            <Route path='/news' component={News} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
  );
}



export default App;
