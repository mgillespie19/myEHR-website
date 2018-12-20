import React, { Component } from 'react';
import './Patient.css';
import {Link} from 'react-router-dom';


class Patient extends Component {

    render() {
        return(
            <div className="container">
                <div className="patient">
                    <h1>myEHR Patient Account</h1>
                    <div className="patient-image">
                        <img alt="house" src={require("../../../assets/images/house.png")}/>
                    </div>
                    <p>With a myEHR Patient account you can now view all of your medical records in one location. No more transcript requests or having to remember multiple medical account credentials. In addition to this you can also now aprove or reject any medical requests.</p>
                    <div className="button-row">
                        <Link to="/account/patient"><div className="button">Login to myEHR Account</div></Link>
                        <Link to="/account/patient/create"><div className="button">Create an Account Today</div></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Patient;
