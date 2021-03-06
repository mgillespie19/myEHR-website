import React, { Component } from 'react';
import './About.css';


class About extends Component {
    constructor(props){
        super(props);
        this.aboutRef = props.aboutRef
    }
    render() {
        return(
            <div className="about">
                <div className="card">
                    <h1 ref={this.aboutRef}>About</h1>
                    <div className="line-break"></div>
                    <p>Our goal is to improve patient outcome within the public health sector by democratizing health records with a secure system for everyone. Electronic Health Records (EHR) are a necessity for securely giving patients the care they need, and thus doctors the information they require to do so, but there are currently around 950 vendors providing over 1,700 unique certified EHR products. Because of the siloed nature of these record systems, the process of transferring records involves requesting an EHR, having to fax the EHR to the healthcare provider, manually print it, verify, fax to the requestor, and then scan (or transcribe) the information into a local EHR. This system is highly inefficient and can lead to records being incorrectly transferred. We hope to significantly minimize inefficiency and possibility of data corruption by offering a new system that uses blockchain to securely store and share patient health records. </p>
                    {/* <div className="img-row">
                        <img alt="Network" src={require("../../../assets/images/network.png")}/>
                        <img alt="Block Chain" src={require("../../../assets/images/ehrchain.png")}/>
                    </div> */}
                    <div className="process">
                        <img alt="Blockchain Process" src={require("../../../assets/images/blockchain_process.png")}/>
                    </div>
                </div>
                <div className="card">
                    <h2>Background</h2>
                    <div className="line-break"></div>
                    <p>The transition to Electronic Medical Records (EMRs) has been a significant issue in the healthcare system for a few years. A large amount of sensitive data generated by healthcare creates a legal impetus for secure storage that first led doctors offices and health networks to turn to third-party offsite servers for data storage.</p>
                    <p>The healthcare industry from their EHR system and they mail or fax them to the new doctor’s office. Finally, the new doctor’s office takes, since the inception of EMR, has produced more than 1,700 unique Electronic Medical Record systems, with more than 90% of hospitals and more than 80% of private practice using a system of some kind to store their data. These EMR providers store clients’ information in large data warehouses which often are not designed for interoperability, in many cases creating data ‘silos’ between which communication is difficult and sometimes impossible.</p>
                    <p>In cases where patients move, switch doctors, see a doctor for the first time, or visit a doctor who is unaffiliated with their usual network, medical records have to be transferred between offices. For many systems, this process necessitates three steps before records can be shared. First, the patient must tell the original doctor’s office to send the records to the new doctors’ office. The original office then prints the medical records of the patient in question the physical copies of records and transcribes them by either scanning them or manually entering data into their EHR system.</p>
                    <p>This process is not only arduous but prone to error; Anna Maria Barry-Jester, a public health reporter, described EMRs as "a bunch of records with bits of information that aren't linked together electronically". Lack of data storage standardization from system to system makes the aforementioned process unnecessarily complicated. As a result, more than 60% of EMR-related claims reference use-error between systems as the reason for the malpractice.</p>
                    <p>Furthermore, if a patient wants to have his or her own medical records, the only option is to request the printed copies mailed to one’s home. The patient, notably, never owns their data in any meaningful way. Labs that perform testing on patient samples also have no simple way of communicating their results because the data is kept in several places. They must simply return a physical copy of their results to the doctor’s office that requested it and office staff must then update their EMR system with the results.</p>
                    <p>Finally, existing EMR solutions collect the bulk of their revenue directly from doctors offices, so they have an impetus not to make it too automatic to export data to competitors’ systems. These shortcomings have led to the need for a next-generational EMR system. One in which patients themselves maintain control of the most up-to-date version of their own data, and act as the key to deciding who gets access to what. The way we’ve chosen to implement this is with a publicly available database, enabled by blockchain technology.</p>
                    <p>Our group endeavors to decrease malpractice as a result of EMR data transfer by making the data transfer process easier and making patient data more accessible.</p>
                </div>
                <div className="card">
                    <h2>Download the Mobile App</h2>
                    <div className="line-break"></div>
                    <p>Our mobile app is the client-facing portion of this system, where users can login and securely fetch, view, and edit patient records, either only their own if they are a patient, or with escalated privileges if they are a clinician.</p>
                    <div className="img-row">
                        <img alt="App Screen Shot" src={require("../../../assets/images/appLoginScreenshot.png")}/>
                        <img alt="App Screen Shot" src={require("../../../assets/images/appRecordsScreenshot.png")}/>
                    </div>
                    <p>Currently the app is avaiable on the Apple App Store and will be coming to Google Play Store soon.</p>
                    <div className="app-store">
                        <a href="https://www.apple.com/ios/app-store/">
                            <img id="apple" alt="Apple App Store" src={require("../../../assets/icons/download_on_app_store.png")}/>
                        </a>
                        <a href="https://play.google.com/store/apps/">
                            <img id="google" alt="Google Play Store" src={require("../../../assets/icons/google-play-badge.png")}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;