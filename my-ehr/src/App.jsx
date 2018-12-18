import React, { Component } from 'react';
import './App.css';
import Root from './componets/pages/Root';
import Home from './componets/pages/Home/Home';
import Account from './componets/pages/Account/Account';
import Patient from './componets/pages/Patient/Patient';
import Provider from './componets/pages/Provider/Provider';
import About from './componets/pages/About/About';
import PatientProfile from './componets/pages/Profile/PatientProfile/PatientProfile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import fire from './config/fire';


class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.state = {
      user: {},
    }
  }

  componentDidMount(){
    this.authListener()
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Root aboutRef={this.aboutRef}>
      {/* {this.state.user ? (<PatientProfile/>) : ( */}
        <BrowserRouter>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Home}/>
            <Route path={process.env.PUBLIC_URL + '/About/'} exact component={About}/>
            <Route path={process.env.PUBLIC_URL + '/Patient/'} exact component={Patient}/>
            <Route path={process.env.PUBLIC_URL + '/Provider/'} exact component={Provider}/>
            <Route path={process.env.PUBLIC_URL + '/Account/'} exact component={Account}/>
          </Switch>
        </BrowserRouter>
      {/* )} */}
      </Root>
    );
  }
}

export default App;
