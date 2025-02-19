import React from 'react'
import './Signup.css'

function Signup () {
  class SignUp {
    constructor(Fname,Sname,USI,exampleInputEmail1,ReexampleInputEmail1,pass,Repass){
   
      this.first_name = Fname.value;
      this.last_name = Sname.value;
      this.User_name = USI.value;
      this.Email = exampleInputEmail1.vlaue;
      this.ConEmail = ReexampleInputEmail1.value;
      this.password = pass.value;
      this.Conpassword = Repass.value;

    

    }
     
    inputs(){
       if(this.first_name === "" || this.last_name === "" || this.User_name === "" || this.Email === "" || this.ConEmail === "" || this.password === "" || this.Conpassword === ""){
        alert("please fill all the inputs first");
       }

       let userName_database = ["youssef","osama","mark","ahmed"];
       let password_database = ["12345","67890,125689,34212341"];
       
      if (this.Email === this.ConEmail) {
        alert("please write the same email")
        
      }
      else if(this.password !== this.Conpassword){
        alert("the password is not the same, please rewrite it")
        return;
      }

       for (let index = 0; index < userName_database.length; index++) {
       if (userName_database[index] === this.User_name) {
         alert("sorry that user name is taken, choose another one")
         return;
       }
       else{
        userName_database.push(this.User_name);
        password_database.push(this.password);
        return;
       }
        
       }
    }
}



function signUp_trigger(){
    let first_name = document.querySelector("#Fname");
    let last_name =  document.querySelector("#Sname");
    let User_name =  document.querySelector("#USI");
    let Email =  document.querySelector("#exampleInputEmail1");
    let ConEmail =  document.querySelector("#ReexampleInputEmail1");
    let password =  document.querySelector("#pass");
    let Conpassword =  document.querySelector("#Repass");
    
     let trigger = new SignUp(first_name,last_name,User_name,Email,ConEmail,password,Conpassword)
     trigger.inputs();
}

  return (
    <div className >
        <div id="sign_up_area">
            <div className="input-group">
            <input type="text" aria-label="First name" className="form-control" id="Fname" placeholder="First Name"/>
            <input type="text" aria-label="Last name" className="form-control" id="Sname" placeholder="Last Name"/>
          </div>
            <input type="text" aria-label="First name" className="form-control" id="USI" placeholder="User Name"/>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your email"/>
            <input type="email" className="form-control" id="ReexampleInputEmail1" placeholder="Rewrite email"/>
            <input type="password" className="form-control" id="pass" placeholder="Set your password"/>
            <input type="password" className="form-control" id="Repass" placeholder="Rewrite password"/>
            <button className="create_acc" onClick={signUp_trigger}>
                Create an account
            </button>
        </div>
        
    </div>
  )
}

export default Signup