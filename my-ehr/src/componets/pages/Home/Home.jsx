import React, { Component } from 'react';
import './Home.css';
import About from '../About/About';
import {Animated} from "react-animated-css";


class Home extends Component {
    state = {
        showMainContent: false
    }
    componentDidMount(){
        console.log(this.state.showMainContent)
        this.setState(state => ({
            showMainContent: true
        }));
        console.log(this.state.showMainContent)
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
                    </div>
                </div>
                <About />
            </div>
        );
    }
}

export default Home;
