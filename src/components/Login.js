import React from 'react'
import './Login.css'
import { useState } from 'react'

export default function Login() {

const [email, setEmail] = useState("")
const [firstName, setFirstName] = useState("")
const [secondName, setSecondName] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
const [error, setError] = useState("")




const handleClick = (event)=>{

    event.preventDefault();

    if(email.indexOf("@") === -1 ){

        setError("Please Enter a Valid Email")
        console.log(error)

        return;
    }

    if(firstName.length < 3 || secondName.length < 3){

        setError("Enter Valid Names")
        console.log(error)

        return;
    }

    if(password.length < 6){

        setError("Passwords must be greater than 6 characters")
        console.log(error)
        return;
    }

    if(password !== confirmPassword){

        setError("Passwords Dont Match")
        console.log(error)
        return;
    }

 const token1 = Math.random() * 100000
const token2 = Math.floor(token1)

    const details = {

       


        message: "Sign Up Sucessful",
        uniqueId: "poi"+ token2,
        firstname: firstName,
        secondname: secondName,
        password: password,
        email: email,

    }

    console.log(details)
    


}


  return (
    
        <>

<div className="container">
    <div className="left">

       


    </div>
    <div className="right">

        <div className="main-content">

            <div className="title">
                <h3>Sign Up For an Account</h3>
                 <p>StartExploring the World!</p>
            </div>

            <div className="first-line"></div>

            <div className="main-form">
                <div className="main-form-inner">

                    <form action="">


                    <div className="form-top">
                        <input type="text" placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)} value={firstName} />
                        <input type="text" placeholder="Last Name" onChange={(e)=> setSecondName(e.target.value)} value={secondName} />

                    </div>

                    <div className="other-sections">

                        <input type="email" placeholder="Email"  onChange={(e)=> setEmail(e.target.value)} value={email} /><br />

                        <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} />
                       
                        <input type="password" placeholder="Confirm Password" onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword} />

                    </div>
                
                    
                <div className="terms-section">
                    <p>By Creating an Account, You aggree to our, <span>Privacy Policy.</span> </p>
                </div>

                <div className="submit-btn">
                    <button onClick={handleClick} >Sign Up</button>
                </div>
                
                
                
                
                </form>
                </div>
            </div>

        </div>

    </div>
</div>




        </>
  )
}
