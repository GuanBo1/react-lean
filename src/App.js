import React from 'react';
import {BrowserRouter as Router, HashRouter, Switch,Route} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import './App.scss'

export default class App extends React.Component{
  constructor(params) {
    super(params);
    this.state = {
      
    }
  }
  render(){
    return (
      <div className='test'>
        <h2>ddddd</h2>
        <Router>
          <HashRouter>
            <Switch>
              <Route component={Home} exact path="/"></Route>
              <Route component={About} path="/about"></Route>
            </Switch>
          </HashRouter>
        </Router>
      </div>
     
    );
  }
}

