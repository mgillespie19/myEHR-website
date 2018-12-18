import React, { Component } from 'react';
import './Patient.css';


class Patient extends Component {

    render() {
        return(
            <div className="container">
                <div className="patient">
                    <h1>Patient</h1>
                    <img alt="Hospital"/>
                    <p>With a myEHR Patient account you can now view all of your medical records in one location. No more transcript requests or having to remember multiple medical account credentials. In addition to this you can also now aprove or reject any medical requests.</p>
                </div>
            </div>
        );
    }
}

export default Patient;
