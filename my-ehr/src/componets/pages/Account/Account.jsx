import React, { Component } from 'react';
import './Account.css';

import PatientLogin from './PatientLogin/PatientLogin';


class Account extends Component {
   
    render() {
        return(
            <div className="container">
                <div className="account">
                    <h1>Account</h1>
                    <PatientLogin/>
                </div>
            </div> 
        );
    }
}

export default Account;