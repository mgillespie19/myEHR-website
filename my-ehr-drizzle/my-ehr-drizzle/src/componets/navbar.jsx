import React, { Component } from 'react';
import './navbar.css';



class ProviderPortalNavbar extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    componentDidMount(){
        console.log("Provider Portal Mount");
        // document.getElementsByClassName("navbar")[0].classList = "navbar hidden";
        // document.getElementsByClassName("footer")[0].classList = "footer hidden";
        // document.getElementsByClassName("footer")[0].classList = "footer hidden";
        this.setState({
            
        });
    }
    componentWillUnmount(){
        console.log("Unmount Component");
        // document.getElementsByClassName("navbar")[0].classList = "navbar";
        // document.getElementsByClassName("footer")[0].classList = "footer";
    }

    render() {
        return(
            <div className="secondary-navbar">
                <div className="logo">myEHR</div>
                <div className="nav-spacing"/>
                <div className="navbar-items">
                    <ul>
                        <li>Inbound</li>
                        <li>Outbound</li>
                        <li>Settings</li>
                        <li>Help</li>
                        <li id="logout">Logout</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProviderPortalNavbar;