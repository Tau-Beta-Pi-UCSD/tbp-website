
import React from 'react'
import './App.css';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Initiation from './pages/Initiation';
import Membership from './pages/Membership';
import Community from './pages/Community';
import Events from './pages/Events';
import Houses from './pages/Houses';

function App ()
{
  return (
    <HashRouter>
      <Switch>
        <Route exact path={ '/' } component={ () => <Redirect to='/home' /> } />
        <Route exact path={ '/initiation' } component={ Initiation } />
        <Route exact path={ '/home' } component={ Home } />
        <Route exact path={ '/membership' } component={ Membership } />
        <Route exact path={ '/community' } component={ Community } />
        <Route exact path={ '/events' } component={ Events } />
        <Route exact path={ '/houses' } component={ Houses } />
        <Route path={ '/' } component={ () => <Redirect to='/home' /> } />
      </Switch>
    </HashRouter>
  );
}

export default App;
