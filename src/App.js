
import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Initiation from './pages/Initiation';
import Membership from './pages/Membership';
import Officers from './pages/Officers';
import Community from './pages/Community';
import Events from './pages/Events';

function App ()
{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ '/' } component={ () => <Redirect to='home' /> } />
        <Route exact path={ '/initiation' } component={ Initiation } />
        <Route exact path={ '/home' } component={ Home } />
        <Route exact path={ '/membership' } component={ Membership } />
        <Route exact path={ '/officers' } component={ Officers } />
        <Route exact path={ '/community' } component={ Community } />
        <Route exact path={ '/events' } component={ Events } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
