import { useState } from "react";
import "./index.css";
import { SignInUser } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
const Signin = () => {
    const navigate = useNavigate();
    const userValue = {
        email: "",
        password: ""
    };
    const [userInput, setUserInput] = useState(userValue);
    
    const ChangeHandlar = (event) => {
        const { name, value } = event.target;
        setUserInput({ ...userInput, [name]: value });
    };

    const submitHandlar = async (e) => {
        e.preventDefault();
        try {
            const response = await SignInUser(userInput.email, userInput.password);
            if(response){
                navigate("/");
            }
            
        } catch (error) {
             
            console.error('Error during sign in:', error.message);
        }
    };

    return (
        <div className="authContainer">
            <form onSubmit={submitHandlar}>
                <div className="SignIncontainer">
                    <h1>Sign In</h1>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="email" onChange={ChangeHandlar} value={userInput.email} required /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" onChange={ChangeHandlar} value={userInput.password} required /><br />
                    <button type="submit" aria-label="Sign In to your account" role="button">Log In</button>
                </div>
            </form>
        </div>
    );
};

export default Signin;