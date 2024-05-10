import "./index.css"



const Signin = ()=>{

    const ChangeHandlar = ()=>{
        
    }
    const submitHandlar = (e)=>{

    }

    return(   
        <div className='authContainer'> 
  
       
        <form onSubmit={submitHandlar}>
         <div className="SignIncontainer">
       
            <h1>Sign In</h1>
            <label htmlFor="email">Email</label>  <br/>
            <input type="email" name="email" id="email" onChange={ChangeHandlar} required />
            <br/>

            <label htmlFor="password">Password</label>  <br/>
            <input type="password" name="password" id="password" onChange={ChangeHandlar} required />
        <br/>
        <button type="submit" aria-label="Sign In to your account" role="button">Log In</button>
    </div>
    </form>
    </div>
    


    )
}

export default Signin;