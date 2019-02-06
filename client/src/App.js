import React, { Component } from 'react';
import './App.css';
import  User  from './component/User.js' 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route exact path="/" />
              <Route path="/user" component={Register}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
