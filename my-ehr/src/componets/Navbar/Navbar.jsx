import React, { Component } from 'react';

import './Navbar.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleSideDrawer: props.toggleSideDrawer,
            showSideDrawer: false,
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
                            <li><a href="/">About</a></li>
                            <li><a href="/">Patient</a></li>
                            <li><a href="/">Practices</a></li>
                            <li><a href="/">Account</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
