import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {

    const onSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <form onSubmit={onSubmit} className="animated fadeInDown">
            <h1 className="title">
                Login into your Account
            </h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn btn-block">Login</button>
            <p className="message">
                Not Registered? <Link to="/signup">Create an Account</Link>
            </p>
        </form>
    );
}
