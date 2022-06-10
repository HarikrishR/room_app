import React from "react";
import axios from "axios";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            emailAddress: '',
            password: '',
            placeHolder:{
                userName: 'Enter User Name',
                emailAddress: 'Enter Email Address',
                password: 'Enter Password'
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
          [name]: target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        var userData = {
            userName: this.state.userName,
            emailAddress: this.state.emailAddress,
            password: this.state.password,
        }

        axios.post("/signUp", userData).then(res => {
            console.log("res from axios.post/addinfo", res);
        })
        .catch(error => {
            console.error("error :", error);
        });
    }
    render(){
        return(
            <>
                <h1>Register</h1>
                <form>
                    <label>User Name : </label>
                    <input type='text' name='userName' value={this.state.userName} onChange={this.handleInputChange}  placeholder={this.state.placeHolder.userName} /><br/>
                    <label>Email Address : </label>
                    <input type='email' name='emailAddress' value={this.state.emailAddress} onChange={this.handleInputChange} placeholder={this.state.placeHolder.emailAddress}/><br/>
                    <label>Password : </label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleInputChange} placeholder={this.state.placeHolder.password}/><br/>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </>
        )
    }
}

export default Register;