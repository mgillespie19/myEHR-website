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
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Home/>}/>
            <Route path="/about" exact render={() => <About/>}/>
            <Route path="/patient" exact render={() => <Patient/>}/>
            <Route path="/provider" exact render={() => <Provider/>}/>
            <Route path="/account" exact render={() => <AccountDirectory/>}/>
            <Route path="/account/patient" exact render={() => <PatientLogin/>}/>
            <Route path="/account/provider" exact render={() => <ProviderLogin/>}/>
            <Route path="/account/patient/create" exact render={() => <PatientCreateAccount/>}/>
            <Route path="/account/provider/create" exact render={() => <ProviderCreateAccount/>}/>
          </Switch>
        </BrowserRouter>
      </Root>
    );
  }
}

export default App;
