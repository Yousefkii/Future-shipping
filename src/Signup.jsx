import React, { useState } from 'react'
import './Signup.css'
import {UserName_data} from './Arrays'
import {Password_data} from './Arrays'
import {useNavigate} from 'react-router-dom'

function Signup () {
 
 const navigate = useNavigate();

 function assigning_first_name(e){
  setfirst_name(e.target.value)
 }
 function assigning_last_name(e){
  setlast_name(e.target.value)
 }
 function assigning_username(e){
  setusername(e.target.value)
 }
 function assigning_email(e){
  setemail(e.target.value)
 }
 function assigning_confirm_email(e){
  setconfirm_emil(e.target.value)
 }
 function assigning_password(e){
  setpassword(e.target.value)
 }
 function assigning_confirm_password(e){
  setconfirm_password(e.target.value)
 }

 const [first_name,setfirst_name] = useState('')
 const [last_name,setlast_name] = useState('')
 const [username,setusername] = useState('')
 const [email,setemail] = useState('')
 const [confirm_emil,setconfirm_emil] = useState('')
 const [password,setpassword] = useState('')
 const [confirm_password,setconfirm_password] = useState('') 

   function signUp_trigger(){
      

       if(first_name ==='' || last_name ==='' || username ==='' || email ==='' || confirm_emil ==='' || password ==='' || confirm_password ===''){
        alert('please fill all the fields first')
        return;
       }       
       else if(email !== confirm_emil){
         alert('please enter the same email')
         setconfirm_emil('')
         return;
       }
       else if(password !== confirm_password){
        alert('please enter the same password')
        setconfirm_password('')
        return
      }
      UserName_data.some(ele =>{
        if (ele === username) {
          alert('sorry that username is taken choose another one')
          setusername('')
          return;
        }
        
      })
        AccCreacting(username,password)
      
   }

   function AccCreacting(username,password){
    UserName_data.push(username)
    Password_data.push(password)
    alert('data have been saved')
    navigate('/Login')
   }
   

  return (
    <div className >
        <div id="sign_up_area">
          
            <div className="input-group">
            <input type="text"  className={'form_control'.toString()} id="Fname" value={first_name} onChange={assigning_first_name} placeholder="First Name"/>
            <input type="text"  className={'form_control'.toString()} id="Sname" value={last_name} onChange={assigning_last_name} placeholder="Last Name"/>
          </div>
            <input type="text"  className={'form_control'.toString()} id="USI" value={username} onChange={assigning_username} placeholder="User Name"/>
            <input type="email" className={'form_control'.toString()} id="exampleInputEmail1" value={email} onChange={assigning_email} placeholder="Your email"/>
            <input type="email" className ={'form_control'.toString()} id="ReexampleInputEmail1" value={confirm_emil} onChange={assigning_confirm_email} placeholder="Rewrite email"/>
            <input type="password" className={'form_control'.toString()} id="pass" value={password} onChange={assigning_password} placeholder="Set your password"/>
            <input type="password" className={'form_control'.toString()} id="Repass" value={confirm_password} onChange={assigning_confirm_password} placeholder="Rewrite password"/>
            <button className={'create_acc'.toString()} onClick={signUp_trigger}>
                Create an account
            </button>
            
        </div>
        
    </div>
  )
}

export default Signup  
