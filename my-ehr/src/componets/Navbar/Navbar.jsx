import React, { Component } from 'react';

import './Navbar.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

import {Link} from 'react-router-dom';


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
                    <div className="logo"><img alt="myEHR" src={require("../../assets/images/medicalblock.png")} /><Link to='/'> myEHR </Link></div>
                    <div className="nav-spacing"/>
                    <div className="navbar-items">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/team/'>Team</Link></li>
                            <li><Link to='/FAQ/'>FAQ</Link></li>
                            <li><Link to='/account/'>Account</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
