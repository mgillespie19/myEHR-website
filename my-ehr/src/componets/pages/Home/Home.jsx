import React, { Component } from 'react';
import './Home.css';
import {Animated} from "react-animated-css";
import About from '../About/About';


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
                <div className="background">
                    <div className="home">
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                            <img alt="logo" src={require("../../../assets/images/medicalblock.png")}/>
                            <div className="mission-statement">
                                <p><strong>Mission Statement:</strong> "Our goal is to improve patient outcome within the public health sector by democratizing health records with a secure system for everyone."</p>
                            </div>
                        </Animated>
                        {/* <div className="learn-more">
                            <h1>Learn More</h1>
                            <div className="patient-card">
                                <h2>myEHR Patient Account</h2>
                                <img alt="patient icon" src=""/>
                            </div>
                            <div className="provider-card">
                                <img alt="provider icon" src=""/>
                                <h2>Provider Portal</h2>
                            </div>
                        </div> */}
                    </div>
                </div>
                <About aboutRef={this.aboutRef}/>
            </div>
        );
    }
}

export default Home;
