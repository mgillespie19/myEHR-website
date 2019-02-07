import React, { Component } from 'react';
import './Home.css';
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';

import News from "../News/News";


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMainContent: false
        }
        this.aboutRef = props.aboutRef;
    }
    
    componentDidMount(){
        this.setState(state => ({
            showMainContent: true
        }));
    }

    render() {
        return(
            <div className="container">

                {/* <div className="background">
                    <div className="home">
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                            <img alt="logo" src={require("../../../assets/images/medicalblock.png")}/>
                            <div className="mission-statement">
                                <p><strong>Mission Statement:</strong> "Our goal is to improve patient outcome within the public health sector by democratizing health records with a secure system for everyone."</p>
                            </div>
                        </Animated>
                    </div>
                </div> */}

                <div className="parallax-background" id="hospital">
                    <div className="home">
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                            <img alt="logo" src={require("../../../assets/images/medicalblock.png")}/>
                            <div className="mission-statement">
                                <p><strong>Mission Statement:</strong> "Our goal is to improve patient outcome within the public health sector by democratizing health records with a secure system for everyone."</p>
                            </div>
                        </Animated>
                    </div>
                </div>

                <div className="learn-more">
                    <h1>Learn More</h1>
                    <div className="account-type">
                        <Link to="/account/account">
                            <div className="card">
                                <h2>myEHR Patient Account</h2>
                                <div className="card-image">
                                    <img alt="patient icon" src={require("../../../assets/images/house.png")}/>
                                </div>
                            </div>
                        </Link>
                        <Link to="/account/account">
                            <div className="card">
                                <h2>Provider Portal</h2>
                                <div className="card-image">
                                    <img alt="provider icon" src={require("../../../assets/images/hospital.png")}/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="parallax-background" id="patientHelp">
                    <div className="stat">
                        <p>There are about 950 vendors providing more than 1700 unique certified EHR products</p>
                    </div>
                </div>

                <div className="health">
                    <h1>How blockchain can save healthcare</h1>
                    <center>
                        <div className="youtube-video">
                            <iframe title="myEHR Video" width="400" height="400" src="https://www.youtube.com/embed/F2VJxuyrw9I"></iframe>
                        </div>
                    </center>
                </div>

                <div className="parallax-background" id="providerHelp">
                    <div className="stat">
                        <p>Tens of millions of dollars given every year to malpractice-related claims. Rate of use-error is 60% in EHR-related malpractice claims</p>
                    </div>
                </div>

                <News></News>

            </div>
        );
    }
}

export default Home;
