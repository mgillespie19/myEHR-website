import React, { Component } from 'react';
import './Provider.css';


class Provider extends Component {

    render() {
        return(
            <div className="container">
                <div className="provider">
                    <h1 id="title"> Provider Portal Coming Soon...</h1>
                    <img id="hospital" alt="Hospital" src={require("../../../assets/images/hospital.png")} />
                    <p>The provider portal is currently under development still, and is not ready for deployment.</p>
                </div>
            </div>
        );
    }
}

export default Provider;
