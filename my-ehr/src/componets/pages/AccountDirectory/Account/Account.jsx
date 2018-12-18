import React, { Component } from 'react';
import './Account.css';

class Account extends Component {

    render() {
        return(
            <div className="container">
                <div className="account">
                    <div className="patient">
                        <div className="account-icon">
                            <img id="house" alt="patient icon" src={require("../../../../assets/images/house.png")}/>
                            <a href={process.env.PUBLIC_URL + '/account/patient'}><div>Patient</div></a>
                        </div>
                    </div>
                    <div className="provider">
                        <div className="account-icon">
                            <img id="hospital" alt="provider icon" src={require("../../../../assets/images/hospital.png")}/>
                            <a href={process.env.PUBLIC_URL + '/account/provider'}><div>Provider</div></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
