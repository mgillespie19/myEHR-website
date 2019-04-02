import React, { Component } from 'react';
import './Account.css';
import Patient from '../../Patient/Patient';
import Provider from '../../Provider/Provider';

// import {Link} from 'react-router-dom';


class Account extends Component {

    render() {
        return(
            <div className="container">
                <div className="title">
                    <h1>Select an Account Type</h1>
                    <p>myEHR offers two account types, one for patients and the other for providers. Please select an account type.</p>
                    <div className="line-break"></div>
                </div>
                <div className="account">
                    {/* <Link to='/account/patient'>
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
                    </Link> */}
                    <Patient></Patient>
                    <Provider></Provider>
                </div>
            </div>
        );
    }
}

export default Account;
