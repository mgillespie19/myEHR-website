import React, { Component } from 'react';
import './Patient.css';


class Patient extends Component {
   
    render() {
        return(
            <div className="container">
                <div className="patient">
                    <h1>Patient</h1>
                    {/* <img alt="Hospital" src={require("../../../assets/icons/patient_icon.png")}/> */}
                    <p>With a myEHR Patient account you can now view all of your medical records in one location. No more transcript requests or having to remember multiple medical account credentials. In addition to this you can also now aprove or reject any medical requests.</p>
                    <a href="/account/patient"><div>Login to myEHR Account</div></a>
                    <a href="account/patient/create"><div>Create an Account Today</div></a>
                </div>
            </div> 
        );
    }
}

export default Patient;