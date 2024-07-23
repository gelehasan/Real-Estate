import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { SignInUser } from "../../Firebase/firebase";

const Signin = () => {
    const userValue = {
        email: "",
        password: ""
    };
    const [userInput, setUserInput] = useState(userValue);
 
    const [error, setError] = useState(null);
    const navigate = useNavigate();
 

    const ChangeHandlar = (event) => {
        const { name, value } = event.target;
        setUserInput({ ...userInput, [name]: value });
    };

    const submitHandlar = async (e) => {
        e.preventDefault();
        try {
            const response = await SignInUser(userInput.email, userInput.password);
 
 
        } catch (error) {
 
            // Assuming SignInUser returns some response on successful login
            if (response) {
                navigate('/'); // Redirect to home page
            }
        } catch (error) {
            setError(error.message);
 
            console.error('Error during sign in:', error.message);
        }
    };

    return (
        <div className="authContainer">
            <form onSubmit={submitHandlar}>
                <div className="SignIncontainer">
                    <h1>Sign In</h1>
                    {error && <p className="errorMessage">{error}</p>}
                    <label htmlFor="email">Email</label><br />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={ChangeHandlar}
                        value={userInput.email}
                        required
                    /><br />
                    <label htmlFor="password">Password</label><br />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={ChangeHandlar}
                        value={userInput.password}
                        required
                    /><br />
                    <button type="submit" aria-label="Sign In to your account" role="button">Log In</button>
                   
                </div>
            </form>
        </div>
    );
};

export default Signin;
