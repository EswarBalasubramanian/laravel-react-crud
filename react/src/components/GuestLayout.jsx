import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserStateContext } from '../contexts/contextProvider'

export default function GuestLayout() {
    const { token } = UserStateContext();
    if (token) {
        return <Navigate to='/' />
    }
    return (
        <div className="login-signup-form">
            <div className="form">
                <Outlet />
            </div>
        </div>
    )
}
