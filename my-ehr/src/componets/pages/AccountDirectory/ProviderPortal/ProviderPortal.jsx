import React, { Component } from 'react';
import './ProviderPortal.css';
//import fire from '../../../../config/fire';


class ProviderPortal extends Component {
    constructor(){
        super();
        this.state = {
            providerName: "Provider Clinic",
        }
    }

    componentDidMount(){
       //retrieve provider name
       this.setState({
            providerName: "Provider Clinic",
       });
    }

    render() {
        return(
            <div className="container">
                <div className="secondary-navbar">
                    <div className="nav-spacing"/>
                    <div className="navbar-items">
                        <ul>
                            <li>Inbound</li>
                            <li>Outbound</li>
                            <li>Settings</li>
                            <li>Help</li>
                            <li className="logout">Logout</li>
                        </ul>
                    </div>
                </div>

                <div className="dashboard">
                    <div className="side-menu">
                        <ul>
                            <li>New Request</li>
                            <li>Previous Requests</li>
                        </ul>
                    </div>
                    <div className="provider-content">
                        <h1>Welcome Provider</h1>
                    </div>
                </div>
                
            </div> 
        );
    }
}

export default ProviderPortal;