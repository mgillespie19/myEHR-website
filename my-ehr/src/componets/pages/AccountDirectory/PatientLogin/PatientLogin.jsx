import React, { Component } from 'react';
import './PatientLogin.css';
import fire from '../../../../config/fire';


class PatientLogin extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
        }
    }
   login = (event) => {
       
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((e)=>{
            console.log("User Signed In!!");
        }).catch((error)=>{
            console.log(error); 
            this.refs.errorMessage.innerHTML = error;
        });
    }

    updateState = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return(
            <div className="patient-login">
                <div className="login-container">
                    <h2>Patient Login</h2>
                    <form>
                        <input onChange={this.updateState} type="email" name="email" placeholder="Email" required/><br/>
                        <input onChange={this.updateState} type="password" name="password" placeholder="Password" required/><br/>
                        <button onClick={this.login}>Login</button>
                    </form>
                    <p ref="errorMessage"></p>
                </div>
            </div>
        );
    }
}

export default PatientLogin;
