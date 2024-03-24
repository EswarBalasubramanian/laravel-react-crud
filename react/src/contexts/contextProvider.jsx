import { createContext, useContext, useState } from "react";
import React from "react";
import PropTypes from 'prop-types';

const StateContext = createContext({
    user: null,
    token: null,
    setUser: (user) => { },
    setToken: (token) => { }
})
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Eswar'
    });
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    // const [token, _setToken] = useState(123);

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
        { children }
        </StateContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.any
}

export const UserStateContext = () => useContext(StateContext)
