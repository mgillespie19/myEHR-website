import React, { Component } from 'react';
import './App.css';
import Root from './componets/pages/Root';
import Home from './componets/pages/Home/Home';
import AccountDirectory from './componets/pages/AccountDirectory/AccountDirectory';
import PatientLogin from './componets/pages/AccountDirectory/PatientLogin/PatientLogin';
import ProviderLogin from './componets/pages/AccountDirectory/ProviderLogin/ProviderLogin';
import PatientCreateAccount from './componets/pages/AccountDirectory/PatientCreateAccount/PatientCreateAccount';
import ProviderCreateAccount from './componets/pages/AccountDirectory/ProviderCreateAccount/ProviderCreateAccount';
import Patient from './componets/pages/Patient/Patient';
import Provider from './componets/pages/Provider/Provider';
import About from './componets/pages/About/About';
import PatientProfile from './componets/pages/AccountDirectory/PatientProfile/PatientProfile';
import ProviderPortal from './componets/pages/AccountDirectory/ProviderPortal/ProviderPortal';
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
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/patient" exact component={Patient}/>
            <Route path="/provider" exact component={Provider}/>
            <Route path="/account" exact component={AccountDirectory}/>
            <Route path="/account/patient" exact component={PatientLogin}/>
            <Route path="/account/provider" exact component={ProviderLogin}/>
            <Route path="/account/patient/create" exact component={PatientCreateAccount}/>
            <Route path="/account/provider/create" exact component={ProviderCreateAccount}/>
          </Switch>
        </BrowserRouter>
      {/* )} */}
      </Root>
    );
  }
}

export default App;
