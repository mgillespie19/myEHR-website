import React, { Component} from 'react';
import './PatientLogin.css';
import fire from '../../../../config/fire';
import { Redirect, Link } from 'react-router-dom';


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
                <center>
                    <div className="login-container">
                        <center>
                            <h2>Patient Login</h2>
                            <img alt="patient icon" src={require("../../../../assets/images/house.png")}/>
                            <form>
                                <input onChange={this.updateState} type="email" name="email" placeholder="Email" required/><br/>
                                <input onChange={this.updateState} type="password" name="password" placeholder="Password" required/><br/>
                                <div className="button" onClick={this.login}>Login</div>
                            </form>
                            <p>Need an account? 
                            <Link to="/account/patient/create"> Register Here</Link>
                            </p>
                            <p ref="errorMessage"></p>
                        </center>
                    </div>
                </center>
            </div>
        );
    }
}

export default PatientLogin;
