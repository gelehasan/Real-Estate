import { useState } from "react"
import "./index.css"



const Signin = ()=>{
    const userValue={
        email:"",
        password:""
    }
    const [userInput,setUserInput] = useState(userValue)
    const ChangeHandlar = (event)=>{
        const {name, value}= event.target;
     
        setUserInput({...userInput, [name]:value})
        console.log(userInput)
    }
    const submitHandlar = (e)=>{

    }

    return(   
        <div className='authContainer'> 
  
       
        <form onSubmit={submitHandlar}>
         <div className="SignIncontainer">
       
            <h1>Sign In</h1>
            <label htmlFor="email">Email</label>  <br/>
            <input type="email" name="email" id="email" onChange={ChangeHandlar} value={userInput.email} required />
            <br/>

            <label htmlFor="password">Password</label>  <br/>
            <input type="password" name="password" id="password" onChange={ChangeHandlar} value={userInput.password} required />
        <br/>
        <button type="submit" aria-label="Sign In to your account" role="button">Log In</button>
    </div>
    </form>
    </div>
    


    )
}

export default Signin;