import React, { Component } from 'react';

import './Navbar.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

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
        console.log("Navbar: "+this.state.showSideDrawer);

        return(
            <header className="navbar">
                <nav className="navbar-nav">
                    <div className="hamburger-menu">
                        <HamburgerMenu click={this.state.toggleSideDrawer} showSideDrawer={this.state.showSideDrawer} />
                    </div>
                    <div className="logo"><a href="/">myEHR</a></div>
                    <div className="nav-spacing"/>
                    <div className="navbar-items">
                        <ul>
                            <li>
                              <a href="/"> Home
                              </a>
                            </li>
                            <li>
                              <button type="button" id="newBtn" className="btn btn-success"  onClick={ this.state.scrollToAbout }> About
                              </button>
                            </li>
                            <li>
                              <button type="button" id="newBtn" className="btn btn-success"> Patient
                              </button>
                            </li>
                            <li>
                              <button type="button" id="newBtn" className="btn btn-success"> Provider
                              </button>
                            </li>
                            <li>
                              <button type="button" id="newBtn" className="btn btn-success"> Account
                              </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
