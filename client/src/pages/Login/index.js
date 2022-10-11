import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {useAuth} from "../../context/auth";
import Logo from "assets/logo.svg";
import './index.scss';

const formFields = [
    {type: 'email', name: 'email', placeholder: 'Enter work email'},
    {type: 'password', name: 'password', placeholder: 'Enter password'}
];

const Login = () => {
    const history = useHistory()
    const [values, setValues] = useState({[formFields[0].name]: '', [formFields[1].name]: ''});
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    let auth = useAuth();

    const login = async () => {
        const {email, password} = values

        try {
            await auth.login({email, password})
        } catch (e) {
            setError(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        if(auth.user) {
            history.push('/')
        }
    }, [auth.user])

    useEffect(() => {
        if(loading) {
            login()
        }
    }, [loading])

    const onChangeInput = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setLoading(true)
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} className="header__logo" alt="logo" />
                <div className="header-wrapper">
                    <span className="title">Joonko's Jobs Manager</span>
                    <span className="subtitle">Enter your details</span>
                </div>
                <form className="auth-form" onSubmit={onSubmitForm}>
                    {formFields.map(({type, name, placeholder}) => (
                        <input
                            key={`form__${name}`}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={values[name]}
                            onChange={onChangeInput}
                        />
                    ))}
                    <button type="submit" disabled={loading}>Log in</button>
                </form>
                {error && <span className="error-msg">An error occurred, please check your credentials and try again.</span>}
            </div>
        </div>
    )
}

export default Login;