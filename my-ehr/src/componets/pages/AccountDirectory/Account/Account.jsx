import React, { Component } from 'react';
import './Account.css';
import {Link} from 'react-router-dom';


class Account extends Component {

    render() {
        return(
            <div className="container">
                <div className="account">
                    <div className="patient">
                        <div className="account-icon">
                            <img id="house" alt="patient icon" src={require("../../../../assets/images/house.png")}/>
                            <Link to='/account/patient'><div>Patient</div></Link>
                        </div>
                    </div>
                    <div className="provider">
                        <div className="account-icon">
                            <img id="hospital" alt="provider icon" src={require("../../../../assets/images/hospital.png")}/>
                            <Link to='/account/provider'><div>Provider</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
