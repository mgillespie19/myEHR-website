import React, { Component} from 'react';
import './PatientLogin.css';
import fire from '../../../../config/fire';
import { Redirect } from 'react-router-dom';


class PatientLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            toProfile: false,
        }
    }
   login = (event) => {
       
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((e)=>{
            console.log("update logged in state");
            this.setState({
                toProfile: true,
            });
        }).catch((error)=>{
            console.log(error); 
            this.refs.errorMessage.innerHTML = error;
        });
    }

    updateState = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        if(this.state.toProfile){
            console.log("logging in to account");
            return <Redirect to="/account/patient/profile"/>
        }
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
