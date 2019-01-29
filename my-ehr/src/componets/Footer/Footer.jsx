import React from 'react';

import './Footer.css';

const footer = props => (
    <div className="footer">
        <div className="social-media-bar">
          <p>Check us out on social media</p>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/"><img alt="facebook" src={require("../../assets/icons/facebook.png")}/></a>
            <a href="https://twitter.com/"><img alt="twitter" src={require("../../assets/icons/twitter.png")}/></a>
            <a href="https://instagram.com/"><img alt="instagram" src={require("../../assets/icons/instagram.png")}/></a>
            <a href="https://www.youtube.com/watch?v=F2VJxuyrw9I"><img alt="youtube" src={require("../../assets/icons/youtube.png")}/></a>
          </div>
        </div>
        <div className="padding">
            <p>Copyright @2018 myEHR LLC. All rights reserved. For more information please contact info@myEHR.com</p>
        </div>
    </div>
);

export default footer;