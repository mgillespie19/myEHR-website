import React, { Component } from 'react';
import './Faq.css';
import {Animated} from "react-animated-css";



class Faq extends Component {
    constructor(props){
        super(props);
        this.faqRef = props.faqRef
    }
    render() {
        return(
            <div className="faq">
                <h1 ref={this.faqRef}>Frequently Asked Questions (FAQ)</h1>
                <div className="line-break"></div>
                <Animated animationIn="bounceInRight" animationOut="bounceOutLeft" isVisible={true}>
                    <div className="question-list">
                        <div className="faq-block">
                            <div className="question">
                                <h2>Q.</h2>
                                <p>What is blockchain?</p>
                            </div>
                            <div className="answer">
                                <h2>A.</h2>
                                <p>It is a system that stores transactions in a decentralized peer to peer network.</p>
                            </div>
                        </div>
                        <div className="line-break"></div>
                        <div className="faq-block">
                            <div className="question">
                                <h2>Q.</h2>
                                <p>Can you build something HIPAA compliant?</p>
                            </div>
                            <div className="answer">
                                <h2>A.</h2>
                                <p>Short answer yes. Using blockchain ensures the security of the data being stored and makes the system HIPAA compliant.</p>
                            </div>
                        </div>
                        <div className="line-break"></div>
                        <div className="faq-block">
                            <div className="question">
                                <h2>Q.</h2>
                                <p>Can you build something that interfaces with other EMR systems?</p>
                            </div>
                            <div className="answer">
                                <h2>A.</h2>
                                <p>Maybe. Our goal is to improve the access of public health records, which would include facilitating communications with all the EMR systems.</p>
                            </div>
                        </div>
                        <div className="line-break"></div>
                        <div className="faq-block">
                            <div className="question">
                                <h2>Q.</h2>
                                <p>Why use blockchain?</p>
                            </div>
                            <div className="answer">
                                <h2>A.</h2>
                                <p>Using blockchain allows for a secure transfer of medical record data and makes the system HIPAA compliant.</p>
                            </div>
                        </div>

                    </div>
                </Animated>
            </div>
        );
    }
}

export default Faq;
