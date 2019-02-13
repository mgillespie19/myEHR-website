import React, { Component } from 'react';
import './News.css';
// import {Link} from 'react-router-dom';



class News extends Component {
    constructor(props){
        super(props);
        this.newsRef = props.newsRef
    }
    render() {
        return(
            <div className="news">
                {/* <h1 ref={this.newsRef}>myEHR News</h1> */}

                <div className="section announcements">
                    <h1>myEHR News</h1>
                    <div className="line-break"></div>


                    {/* <div className="section-content">
                        <div className="article" id="wyoming">
                            <h3>myEHR forms new LLC in Wyoming</h3>
                            <div className="news-picture">
                                <img src={require("../../../assets/images/wyoming.jpg")} alt="Wyoming"/>
                            </div>
                            <p>
                                The new startup company myEHR offically filed for an LLC in Wyoming and is expected 
                                to get approval by February 12th, 2019. The company hopes to improve the way electronic
                                health records by building a blockchain network that can facilitate medical records 
                                transfers. The company is building this in a way that will be HIPPA compliant and will 
                                ease the patient approval proccess for the medical record transfers.
                            </p>
                        </div> */}

                    <div className="section-content">
                        <a href="https://www.wsj.com/articles/new-rules-could-ease-patients-access-to-their-own-health-records-11549892701?">
                            <div className="article-background" id="newRule">
                                <div className="article-title">
                                    <h3>New Rules Could Ease Patients’ Access to Their Own Health Records</h3>
                                </div>
                                <div className="article-description">
                                    <p>
                                    Moves are meant to allow patients free access to digital data stored in medical care providers’ 
                                    electronic health databases
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a href="http://soswy.state.wy.us/">
                            <div className="article-background" id="wyoming">
                                <div className="article-title">
                                    <h3>myEHR forms new LLC in Wyoming</h3>
                                </div>
                                <div className="article-description">
                                    <p>
                                        The new startup company myEHR officially filed for an LLC in Wyoming and is expected 
                                        to get approval by February 12th, 2019. The company hopes to improve the way electronic
                                        health records by building a blockchain network that can facilitate medical records 
                                        transfers. The company is building this in a way that will be HIPPA compliant and will 
                                        ease the patient approval process for the medical record transfers.
                                    </p>
                                </div>
                            </div>
                        </a>


                        <a href="https://rbpc.rice.edu/about-rbpc">
                            <div className="article-background" id="rice">
                                <div className="article-title">
                                    <h3>myEHR Applies to Rice Business Competition</h3>
                                </div>
                                <div className="article-description">
                                    <p>
                                    The Rice Business Plan Competition is one of the world’s richest student startup competition.
                                    The competition will accept 42 teams from around the world to compete for $1.5 million in
                                    funding.
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a href="http://www.pitchtx.com/">
                            <div className="article-background" id="texas">
                                <div className="article-title">
                                    <h3>myEHR Submits Application to Pitch Texas</h3>
                                </div>
                                <div className="article-description">
                                    <p>
                                    Pitch Texas is a business competition hosted by the University of Texas at Austin. 
                                    There is a total of $50,000 in funding being given out in rewards. The top 16 teams 
                                    will compete on March, 8th. 
                                    </p>
                                </div>
                            </div>
                        </a>


                       


                    </div>
  


                </div>

            </div>
        );
    }
}

export default News;