import React from "react";
import './Login.css'
import {UserName_data} from './Arrays'
import {Password_data} from './Arrays'

function Login() {

   

   function Log_In(){
        let username = document.querySelector('#username').value.trim();
        let password = document.querySelector('#password').value.trim();

        if(username === '' | password === '' ){
          alert('enter a valid data first')
          return;
        }
        else if(username.length < 3) {
          alert("Username must be at least 3 characters long.");
          UserName.value = ""
          password.value = ""
          return;
      }
      for (let index = 0; index < UserName_data.length; index++) {
        if (username === UserName_data[index] && password === Password_data[index]) {
            alert("Welcome " + username);
            window.location.href= "index.html";
            found = true; 
            return;
        }
        else {
            alert("the data is not valid");
            username = ""
            password = ""
            return;
        }
   }
  }

  return (
    <div id="page">
      <div id="body">
        <div id="all-countianer">
      <i className ="fa-regular fa-user " aria-hidden="true"></i>
        <div id="inputs-container">
          <input className="inputs" id="username" type ='text' placeholder="Enter your username"/>
          <input className="inputs" id="password" type ='password' placeholder="Enter your password"/>
          <button id="login-button" onClick={Log_In}>Log in</button>
          <h3>Don't have an account ? </h3>
          <a id="signup">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
