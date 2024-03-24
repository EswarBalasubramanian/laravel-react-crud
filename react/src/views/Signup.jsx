import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { UserStateContext } from '../contexts/contextProvider';

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErrors] = useState(null);
    const {setUser, setToken} = UserStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            // @ts-ignore
            name: nameRef.current.value,
            // @ts-ignore
            email: emailRef.current.value,
            // @ts-ignore
            password: passwordRef.current.value,
            // @ts-ignore
            passwordConfirmation: passwordConfirmationRef.current.value
        }

        axiosClient.post('/signup', payload)
            .then(({data}) => {
                setToken(data.token)
                setUser(data.user)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                    setErrors(response.data.errors);
                }
            })
    };

    return (
        <form onSubmit={onSubmit} className="animated fadeInDown">
            <h1 className="title">
                Signup for free
            </h1>
            {
                errors && <div className="alert">
                    {Object.keys(errors).map(key => (
                        <p>{errors[key]}</p>
                    ))}
                </div>
            }
            <input ref={nameRef} placeholder="Full Name" />
            <input ref={emailRef} type="email" placeholder="Email Address" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <input ref={passwordConfirmationRef} type="password" placeholder="Password Confirmation" />
            <button className="btn btn-block">Signup</button>
            <p className="message">
                Already Registered? <Link to="/login">Sign in</Link>
            </p>
        </form>
    )
}
