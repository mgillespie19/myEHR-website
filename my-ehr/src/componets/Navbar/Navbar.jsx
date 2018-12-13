import React from 'react';

import './Navbar.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar-nav">
            <div className="hamburger-menu">
                <HamburgerMenu click={props.toggleSideDrawer} showSideDrawer={props.showSideDrawer} />
            </div>
            <div className="logo"><a href="/">myEHR</a></div>
            <div className="nav-spacing"/>
            <div className="navbar-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Patient</a></li>
                    <li><a href="/">Practices</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Account</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;