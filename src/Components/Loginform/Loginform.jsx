import React from "react";
import './Loginform.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Loginform = () => {
    return(
        <div className='wrapper'>
            <form acion="">
                <h1>Sign in</h1>

                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <RiLockPasswordFill className='icon'/>
                </div>

                <div className='Remember'>
                    <label><input type='checkbox' />Remember Me</label>
                    <a>Forgot Password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className='reglink'>
                    <p>New User? <a href="#">Register</a></p>
                </div>

            </form>

        </div>
    );
};
export default Loginform;