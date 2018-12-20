import React, { Component } from 'react';
import './Provider.css';
import {Link} from 'react-router-dom';


class Provider extends Component {

    render() {
        return(
            <div className="container">
                <div className="provider">
                    <h1 id="title"> Provider Portal Coming Soon...</h1>
                    <div className="provider-image">
                        <img id="hospital" alt="Hospital" src={require("../../../assets/images/hospital.png")} />
                    </div>
                    <p>The provider portal is currently under development still, and is not ready for deployment.</p>
                    <div className="button-row">
                        <Link to="/account/provider"><div className="button">Access Provider Portal</div></Link>
                        <Link to="/account/provider/create"><div className="button">Register a Provider Portal</div></Link>
                    </div>
                 </div>
            </div>
        );
    }
}

export default Provider;
