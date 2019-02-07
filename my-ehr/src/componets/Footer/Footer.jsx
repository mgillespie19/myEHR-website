import React from 'react';

import './Footer.css';

const footer = props => (
    <div className="footer">
        <div className="social-media-bar">
          <p>Check us out on social media</p>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/Myehr-402177913660274/"><img alt="facebook" src={require("../../assets/icons/facebook.png")}/></a>
            <a href="https://twitter.com/ehr_my"><img alt="twitter" src={require("../../assets/icons/twitter.png")}/></a>
            <a href="https://www.instagram.com/myehr/?hl=en"><img alt="instagram" src={require("../../assets/icons/instagram.png")}/></a>
            <a href="https://www.youtube.com/channel/UCZ_cC5l4f-i3zvyim4QjeUA"><img alt="youtube" src={require("../../assets/icons/youtube.png")}/></a>
          </div>
        </div>
        <div className="padding">
            <p>Copyright @2019 myEHR LLC. All rights reserved. For more information please contact myEHR.tech@gmail.com</p>
        </div>
    </div>
);

export default footer;