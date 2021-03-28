import './App.css';


// components - start
import ProfileContainer from "./components/Profile/ProfileContainer";
import Header from './components/Header/Header';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from './components/News/News';
import Sidebar from './components/Sidebar/Sidebar';
// components - end

import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";



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
          </div>
        </div>
      </BrowserRouter>
  );
}



export default App;
