import React, { Component } from 'react';
import './PatientCreateAccount.css';
import fire from '../../../../config/fire';
import { Redirect, Link } from 'react-router-dom';



class PatientCreateAccount extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            reEnterPassword: "",
            errorMessage: "",
            toProfile: false,
        }
    }

    formIsValid = () => {        
        if(this.state.name == ""){
            this.setState({
                errorMessage: "Name field must be feeled out.",
            });
            return false;
        }
        if(this.state.email == ""){
            this.setState({
                errorMessage: "Email field must be feeled out.",
            });
            return false;
        }
        if(this.state.password == ""){
            this.setState({
                errorMessage: "Password field must be feeled out.",
            });
            return false;
        }
        if(this.state.reEnterPassword == ""){
            this.setState({
                errorMessage: "Reenter Password field must be feeled out.",
            });
            return false;
        }
        console.log(this.state.password);
        console.log(this.state.reEnterPassword);
        
        
        if(this.state.password !== this.state.reEnterPassword){
            console.log("password dont match");
            
            this.setState({
                errorMessage: "Passwords do not match",
            });
            return false;
        } else {
            console.log("password match");
            
        }
        this.setState({
            errorMessage: "",
        });
        return true;
    }

    createAccount = (event) => {
       
        event.preventDefault();
        if(this.formIsValid()){            
            fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((e)=>{
                console.log("User Created");
                this.setState({
                    toProfile: true,
                });
            }).catch((error)=>{
                console.log(error); 
                this.refs.errorMessage.innerHTML = error;
            });
        } else {
            console.log(this.state.errorMessage);
        }
        
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
            <div className="patient-create-account">
                <center>
                    <div className="patient-create-account-container">
                        <center>
                            <h2>Patient Create Account</h2>
                            <img alt="patient icon" src={require("../../../../assets/images/house.png")}/>
                            <form>
                                <input onChange={this.updateState} type="text" name="name" placeholder="Name" required/><br/>
                                <input onChange={this.updateState} type="email" name="email" placeholder="Email" required/><br/>
                                <input onChange={this.updateState} type="password" name="password" placeholder="Password" required/><br/>
                                <input onChange={this.updateState} type="password" name="reEnterPassword" placeholder="Reenter Password" required/><br/>

                                <div className="button" onClick={this.createAccount}>Create Account</div>
                            </form>
                            <p>Already have an account? 
                            <Link to="/account/patient"> Login Here</Link>
                            </p>
                            <p ref="errorMessage">{this.state.errorMessage}</p>
                        </center>
                    </div>
                </center>
            </div>
        );
    }
}

export default PatientCreateAccount;
