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
      <Root aboutRef={this.aboutRef}>
        <BrowserRouter>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact render={() => <Home scrollToAbout={this.scrollToAbout}/>}/>
            <Route path={process.env.PUBLIC_URL + '/about'} exact render={() => <About/>}/>
            <Route path={process.env.PUBLIC_URL + "/patient"} exact render={() => <Patient/>}/>
            <Route path={process.env.PUBLIC_URL + "/provider"} exact render={() => <Provider/>}/>
            <Route path={process.env.PUBLIC_URL + "/account"} exact render={() => <AccountDirectory/>}/>
            <Route path={process.env.PUBLIC_URL + "/account/patient"} exact render={() => <PatientLogin/>}/>
            <Route path={process.env.PUBLIC_URL + "/account/provider"} exact render={() => <ProviderLogin/>}/>
            <Route path={process.env.PUBLIC_URL + "/account/patient/create"} exact render={() => <PatientCreateAccount/>}/>
            <Route path={process.env.PUBLIC_URL + "/account/provider/create"} exact render={() => <ProviderCreateAccount/>}/>
            <PrivateRoute path={process.env.PUBLIC_URL + "/account/patient/profile"} render={() => <PatientProfile/>}/>
            <PrivateRoute path={process.env.PUBLIC_URL + "/account/provider/portal"} render={() => <ProviderPortal/>}/>

          </Switch>
        </BrowserRouter>
      </Root>
    );
  }
}

export default App;
