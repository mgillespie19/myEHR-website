import React, { Component } from 'react';
import './ProviderPortal.css';
import ProviderPortalNavbar from './ProviderPortalNavbar';
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
            <div className="provider-portal">
                <ProviderPortalNavbar></ProviderPortalNavbar>
                <div className="dashboard">
                    <div className="side-menu">
                        <ul>
                            <li>New Request</li>
                            <li>Previous Requests</li>
                        </ul>
                    </div>
                    <div className="provider-content">
                        <h1>Provider Portal Dashboard</h1>
                    </div>
                </div>
            </div> 
        );
    }
}

export default ProviderPortal;