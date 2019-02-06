import React, { Component } from 'react';
import './News.css';



class News extends Component {
    constructor(props){
        super(props);
        this.newsRef = props.newsRef
    }
    render() {
        return(
            <div className="news">
                <h1 ref={this.newsRef}>myEHR News</h1>

                <div className="section">
                    <h2>Social Media</h2>
                    <div className="section-content">
                        <h3>Twitter</h3>
                        <div className="tweets">

                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2>Competitions</h2>
                    <div className="section-content">
                        
                    </div>
                </div>

                <div className="section">
                    <h2>Announcements</h2>
                    <div className="section-content">
                        <div className="article">
                            <h3>myEHR forms new LLC in Wyoming</h3>
                            <img src="" alt=""/>
                            <p>The new startup company myEHR offically filed for an LLC in Wyoming and is expected to get approval by February 12th, 2019. The company hopes to improve the way electronic health records by building a blockchain network that can facilitate medical records transfers. The company is building this in a way that will be HIPPA compliant and will ease the patient approval proccess for the medical record transfers.</p>
                        </div>
                        {/* <a href="https://www.google.com">
                            <div className="article">
                                <h3>Article Title</h3>
                                <p>Article content and description</p>
                            </div>
                        </a> */}

                    </div>
                </div>



            </div>
        );
    }
}

export default News;