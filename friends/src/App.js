import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import FriendForm from './components/addAFriendForm';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
          </ul>
          <p className='websitename'>FIND-A-FRIEND</p>
          <Switch>
            <PrivateRoute exact path='/friends' component={FriendsList} />
            <PrivateRoute exact path='/addfriends' component={FriendForm} />
            <Route path='/login' component={Login}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
