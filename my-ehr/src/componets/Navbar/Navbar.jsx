import React, { Component } from 'react';

import './Navbar.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { a } from 'react-router-dom';
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
                    </div>
                    </BrowserRouter>
                </nav>
            </header>
        );
    }
}

export default Navbar;
