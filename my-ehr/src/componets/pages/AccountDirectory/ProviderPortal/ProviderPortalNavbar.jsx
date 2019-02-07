import React, { Component } from 'react';
import './ProviderPortalNavbar.css';
import {Link} from 'react-router-dom';



class ProviderPortalNavbar extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    componentDidMount(){
        console.log("Provider Portal Mount");
        document.getElementsByClassName("navbar")[0].classList = "navbar hidden";
        document.getElementsByClassName("footer")[0].classList = "footer hidden";
        document.getElementsByClassName("footer")[0].classList = "footer hidden";
        this.setState({
            
        });
    }
    componentWillUnmount(){
        console.log("Unmount Component");
        document.getElementsByClassName("navbar")[0].classList = "navbar";
        document.getElementsByClassName("footer")[0].classList = "footer";
    }

    render() {
        return(
            <div className="secondary-navbar">
                <div className="logo"><Link to='/'>myEHR</Link></div>
                <div className="nav-spacing"/>
                <div className="navbar-items">
                    <ul>
                        <li><Link to='/account/provider/portal'>Inbound</Link></li>
                        <li><Link to='/account/provider/portal'>Outbound</Link></li>
                        <li><Link to='/account/provider/portal'>Settings</Link></li>
                        <li><Link to='/account/provider/portal'>Help</Link></li>
                        <li id="logout"><Link to='/'>Logout</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProviderPortalNavbar;