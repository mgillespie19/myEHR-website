import React, { Component } from 'react';
import './App.css';
import Root from './componets/pages/Root';
import Home from './componets/pages/Home/Home';
import Account from './componets/pages/Account/Account';
import Patient from './componets/pages/Patient/Patient';
import Provider from './componets/pages/Provider/Provider';
import About from './componets/pages/About/About';


import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
  }
 
  render() {
    return (
      <BrowserRouter>
        <Root aboutRef={this.aboutRef}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/patient" exact component={Patient}/>
            <Route path="/provider" exact component={Provider}/>
            <Route path="/account" exact component={Account}/>
          </Switch>
        </Root>
      </BrowserRouter>
    );
  }
}

export default App;
