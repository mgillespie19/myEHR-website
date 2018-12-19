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
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import fire from './config/fire';

const fireAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 10000);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 10000);
  }
};

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fireAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/account",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}


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
        fireAuth.authenticate();
        this.setState({ user });
      } else {
        fireAuth.signout();
        this.setState({ user: null });
      }
    });
  }



  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Root aboutRef={this.aboutRef}>
            <Switch>
              <Route path="/account/patient/create" component={PatientCreateAccount}/>
              <Route path= "/account/provider/create" component={ProviderCreateAccount}/>
              <PrivateRoute path="/account/patient/profile" component={PatientProfile}/>
              <PrivateRoute path="/account/provider/portal" component={ProviderPortal}/>
              <Route path="/account/patient" component={PatientLogin}/>
              <Route path="/account/provider" component={ProviderLogin}/>
              <Route path="/about" component={About}/>
              <Route path="/patient" component={Patient}/>
              <Route path="/provider" component={Provider}/>
              <Route path="/account" component={AccountDirectory}/>
              <Route path="/" render={() => <Home scrollToAbout={this.scrollToAbout}/>}/>
            </Switch>
          </Root>
        </BrowserRouter>
    );
  }
}

export default App;
