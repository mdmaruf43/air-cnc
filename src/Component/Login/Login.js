import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div className="container">
            <div className="login-form">
                <label htmlFor="country">Country/Region
                    <input className="form-control" type="text" name="country" placeholder="Country" />
                </label>
                <label htmlFor="phone">Phone Number
                    <input className="form-control" type="text" name="phone" placeholder="Phone Number" />
                </label>
                <br/>
                <h6>We'll call or text you to confirm your number. Standard message and data rates apply.</h6>
                <br/>
                <button className="btn btn-success form-control"> Continue</button>
                <br/>
                <h6>Dont' have an account? <a href="/signup">Sign up</a></h6>
            </div>
        </div>
    );
};

export default Login;