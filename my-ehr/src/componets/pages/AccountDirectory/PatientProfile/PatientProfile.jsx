import React, { Component } from 'react';
import './PatientProfile.css';
import fire from '../../../../config/fire';


class PatientProfile extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            profileImageUrl: "",
        }
    }

    componentDidMount(){
       //retrieve user name, email, and profile image
       this.setState({

       });
    }

    render() {
        return(
            <div className="container">
                <div className="patient-profile">
                    <h1>Welcome {this.name}</h1>
                    <h2>{this.email}</h2>
                    <div className="profile-image-background">
                        <div className="profile-image-ring">
                            <img alt="profile picture" src=""/>
                        </div>
                    </div>
                    <button>View Records</button>
                    <button>View Requests</button>
                </div>
            </div> 
        );
    }
}

export default PatientProfile;