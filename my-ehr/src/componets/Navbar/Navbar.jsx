import React, { Component } from 'react';

import './Navbar.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { a } from 'react-router-dom';


import Root from '../pages/Root';
import Home from '../pages/Home/Home';
import AccountDirectory from '../pages/AccountDirectory/AccountDirectory';
import PatientLogin from '../pages/AccountDirectory/PatientLogin/PatientLogin';
import ProviderLogin from '../pages/AccountDirectory/ProviderLogin/ProviderLogin';
import PatientCreateAccount from '../pages/AccountDirectory/PatientCreateAccount/PatientCreateAccount';
import ProviderCreateAccount from '../pages/AccountDirectory/ProviderCreateAccount/ProviderCreateAccount';
import Patient from '../pages/Patient/Patient';
import Provider from '../pages/Provider/Provider';
import About from '../pages/About/About';
import PatientProfile from '../pages/AccountDirectory/PatientProfile/PatientProfile';
import ProviderPortal from '../pages/AccountDirectory/ProviderPortal/ProviderPortal';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleSideDrawer: props.toggleSideDrawer,
            showSideDrawer: false,
            scrollToAbout: props.scrollToAbout,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            showSideDrawer: nextProps.showSideDrawer,
        });
    }
    render(){
        return(
            <header className="navbar">
                <nav className="navbar-nav">
                    <div className="hamburger-menu">
                        <HamburgerMenu click={this.state.toggleSideDrawer} showSideDrawer={this.state.showSideDrawer} />
                    </div>
                    <div className="logo"><a href={process.env.PUBLIC_URL + '/'}>myEHR</a></div>
                    <div className="nav-spacing"/>
                    <BrowserRouter>
                        <div className="navbar-items">
                            <ul>
                                <li><a href={process.env.PUBLIC_URL + '/'}> Home </a></li>
                                <li onClick={this.state.scrollToAbout}><a href={process.env.PUBLIC_URL + '/about/'} >About</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/patient/'} >Patient</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/provider/'}>Provider</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/account/'}>Account</a></li>
                            </ul>

                            <Switch>
                              <Route path={process.env.PUBLIC_URL + "/about"} render={() => <About/>}/>
                              <Route path={process.env.PUBLIC_URL + "/patient"} render={() => <Patient/>}/>
                              <Route path={process.env.PUBLIC_URL + "/provider"} render={() => <Provider/>}/>
                              <Route path={process.env.PUBLIC_URL + "/account"} render={() => <AccountDirectory/>}/>
                              <Route path={process.env.PUBLIC_URL + "/account/patient"} render={() => <PatientLogin/>}/>
                              <Route path={process.env.PUBLIC_URL + "/account/provider"} render={() => <ProviderLogin/>}/>
                              <Route path={process.env.PUBLIC_URL + "/account/patient/create"} render={() => <PatientCreateAccount/>}/>
                              <Route path={process.env.PUBLIC_URL + "/account/provider/create"} render={() => <ProviderCreateAccount/>}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </nav>
            </header>
        );
    }
}

export default Navbar;
