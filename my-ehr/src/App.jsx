import React, { Component } from 'react';
import './App.css';
import Root from './componets/pages/Root';
import Home from './componets/pages/Home/Home';
import Team from './componets/pages/Team/Team';
import AccountDirectory from './componets/pages/AccountDirectory/AccountDirectory';
import PatientLogin from './componets/pages/AccountDirectory/PatientLogin/PatientLogin';
import ProviderLogin from './componets/pages/AccountDirectory/ProviderLogin/ProviderLogin';

import PatientCreateAccount from './componets/pages/AccountDirectory/PatientCreateAccount/PatientCreateAccount';
import ProviderCreateAccount from './componets/pages/AccountDirectory/ProviderCreateAccount/ProviderCreateAccount';
import About from './componets/pages/About/About';
import Faq from './componets/pages/FAQ/Faq';

import PatientProfile from './componets/pages/AccountDirectory/PatientProfile/PatientProfile';
import ProviderPortal from './componets/pages/AccountDirectory/ProviderPortal/ProviderPortal';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import fire from './config/fire';
import ReactGA from 'react-ga';
import ScrollToTop from 'react-router-scroll-top';


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
    this.authListener();
    this.initializeReactGA();
  }

  componentWillUnmount(){
    fireAuth.signout();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        console.log("authListener: "+user.uid+" logged in");
        fireAuth.authenticate();
        this.setState({ user });
        console.log("Redirect to user profile page.");
        console.log("state: "+this.state.user.uid);
        console.log("private ?: "+fireAuth.isAuthenticated);
        
      } else {
        console.log("authListener: "+user+" logged out");
        fireAuth.signout();
        this.setState({ user: null });
      }
    });
  }

  initializeReactGA() {
    ReactGA.initialize('UA-133442569-1');
    ReactGA.pageview('/');
  }




  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL} >
          <ScrollToTop>
            <Root aboutRef={this.aboutRef}>
              <Switch>
                <Route path="/account/patient/create" component={PatientCreateAccount}/>
                <Route path= "/account/provider/create" component={ProviderCreateAccount}/>
                <PrivateRoute path="/account/patient/profile" component={PatientProfile}/>

                {/* Change to private once provider login is set up */}
                {/* <PrivateRoute path="/account/provider/portal" component={ProviderPortal}/> */}
                <Route path="/account/provider/portal" component={ProviderPortal}/>

                <Route path="/account/patient" render={ () =><PatientLogin/>}/>
                <Route path="/account/provider" component={ProviderLogin}/>
                <Route path="/about" component={About}/>
                <Route path="/faq" component={Faq}/>
                <Route path="/team" component={Team}/>
                <Route path="/account" component={AccountDirectory}/>
                <Route path="/" render={() => <Home scrollToAbout={this.scrollToAbout}/>}/>
              </Switch>
            </Root>
          </ScrollToTop>
        </BrowserRouter>
    );
  }
}

export default App;
