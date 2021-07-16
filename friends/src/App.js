import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import FriendForm from './components/addAFriendForm';
import Home from './components/LandingPage';


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <PrivateRoute exact path='/friends' component={FriendsList} />
            <PrivateRoute exact path='/addfriends' component={FriendForm} />
            <Route path='/login' component={Login}/>
            <Route exact path='/' component={Home}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
