import React, { Component } from 'react';
import './Account.css';



class Account extends Component {
   
    render() {
        return(
            <div className="container">
                <div className="account">
                    <div className="patient">
                        <div className="account-icon">
                            <img alt="patient icon" src={require("../../../../assets/images/house.png")}/>
                        </div>
                        <a href="account/patient"><div>Patient</div></a>
                    </div>
                    <div className="provider">
                        <div className="account-icon">
                            <img alt="provider icon" src={require("../../../../assets/images/hospital.png")}/>
                        </div>
                        <a href="account/provider"><div>Provider</div></a>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Account;