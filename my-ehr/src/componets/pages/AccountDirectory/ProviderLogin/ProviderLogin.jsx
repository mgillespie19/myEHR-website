import React, { Component } from 'react';
import './ProviderLogin.css';
import fire from '../../../../config/fire';


class ProviderLogin extends Component {
    constructor(){
        super();
        this.state = {
           
        }
    }
   

    render() {
        return(
            <div className="provider-login">
                <center>
                    <div className="login-container">
                        <h2>Provider Portal Login</h2>
                    </div>
                    <h3>Coming Soon...</h3>
                </center>
            </div>
        );
    }
}

export default ProviderLogin;
