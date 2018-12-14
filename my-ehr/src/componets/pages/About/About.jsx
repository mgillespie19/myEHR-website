import React, { Component } from 'react';
import './About.css';


class About extends Component {
    
    render() {
        return(
            <div className="about">
                <h1>About</h1>
                <p>Our goal is to improve patient outcome within the public health sector by democratizing health records with a secure system for everyone. Electronic Health Records (EHR) are a necessity for securely giving patients the care they need, and thus doctors the information they require to do so, but there are currently around 950 vendors providing over 1,700 unique certified EHR products. Because of the siloed nature of these record systems, the process of transferring records involves requesting an EHR, having to fax the EHR to the healthcare provider, manually print it, verify, fax to the requestor, and then scan (or transcribe) the information into a local EHR. This system is highly inefficient and can lead to records being incorrectly transferred. We hope to significantly minimize inefficiency and possibility of data corruption by offering a new system that uses blockchain to securely store and share patient health records. </p>
                <div className="img-row">
                    <img alt="Network" src={require("../../../assets/images/network.png")}/>
                    <img alt="Block Chain" src={require("../../../assets/images/ehrchain.png")}/>
                </div>
                <h2>Download the Mobile App</h2>
                <p>Our mobile app is the client-facing portion of this system, where users can login and securely fetch, view, and edit patient records, either only their own if they are a patient, or with escalated privileges if they are a clinician.</p>
                <div className="img-row">
                    <img alt="App Screen Shot" src={require("../../../assets/images/appLoginScreenshot.png")}/>
                    <img alt="App Screen Shot" src={require("../../../assets/images/appRecordsScreenshot.png")}/>
                </div>
            </div>
        );
    }
}

export default About;