import React, { Component } from 'react';
import './Account.css';
import {Link} from 'react-router-dom';


class Account extends Component {

    render() {
        return(
            <div className="container">
                <div className="title">
                    <h1>Select an Account Type</h1>
                </div>
                <div className="account">
                    <Link to='/account/patient'>
                        <div className="card">
                            <h2>Patient</h2>
                            <center>
                                <img alt="patient icon" src={require("../../../../assets/images/house.png")}/>
                            </center>
                        </div>
                    </Link>
                    <Link to='/account/provider'>
                        <div className="card">
                            <h2>Provider</h2>
                            <center>
                                <img alt="provider icon" src={require("../../../../assets/images/hospital.png")}/>
                            </center>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Account;