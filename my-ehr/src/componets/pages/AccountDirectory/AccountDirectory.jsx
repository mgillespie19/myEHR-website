import React, { Component } from 'react';
import './AccountDirectory.css';

import Account from './Account/Account';
import PatientLogin from './PatientLogin/PatientLogin';
import ProviderLogin from './ProviderLogin/ProviderLogin';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class AccountDirectory extends Component {
   
    render() {
        return(
        <div>
            <Account/>
        </div>
        );
    }
}

export default AccountDirectory;