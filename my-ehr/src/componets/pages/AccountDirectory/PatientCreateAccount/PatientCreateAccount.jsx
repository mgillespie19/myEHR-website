import React, { Component } from 'react';
import './PatientCreateAccount.css';
import fire from '../../../../config/fire';



class PatientCreateAccount extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            reEnterPassword: "",
        }
    }

    createAccount = (event) => {
       
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((e)=>{
            console.log("User Created");
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
            <div className="patient-create-account">
                <div className="patient-create-account-container">
                    <h2>Patient Create Account</h2>
                    <form>
                        <input onChange={this.updateState} type="text" name="name" placeholder="Name" required/><br/>
                        <input onChange={this.updateState} type="email" name="email" placeholder="Email" required/><br/>
                        <input onChange={this.updateState} type="password" name="password" placeholder="Password" required/><br/>
                        <input onChange={this.updateState} type="reEnterPassword" name="reEnterPassword" placeholder="Reenter Password" required/><br/>

                        <button onClick={this.createAccount}>Create Account</button>
                    </form>
                    <p ref="errorMessage"></p>
                </div>
            </div>
        );
    }
}

export default PatientCreateAccount;
