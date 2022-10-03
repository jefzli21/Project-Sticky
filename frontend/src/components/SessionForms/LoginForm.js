import { useEffect, useRef, useState} from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './LoginForm.css';
import wallpaper from '../../assets/log-in.jpg'

import { login, clearSessionErrors } from '../../store/session';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector(state => state.errors.session);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=> {
        return ()=> {
            dispatch(clearSessionErrors());
        };
    },[dispatch]);

    const update = (field) => {
        const setState = field === 'email' ? setEmail : setPassword;
        return e => setState(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    }

    const handleDemoUserClick = (e) => {
        e.preventDefault();
        dispatch(login({ email: "demo@123.com", password: "123456" }))
    }

    return (
            <div className='body'>
                    <div className='form-container'>
                        <form className='register-form-1' onSubmit={handleSubmit}>
                            <h2 className='form-title'>Log In</h2>
                            <div className='errors'>{errors?.email}</div>
                            <label htmlFor='chk' aria-hidden="true">
                                <span className='form-span'>Email </span>
                                <input type='email'
                                    value={email}
                                    onChange={update('email')}
                                    placeholder="Email"
                                    className='form-field'
                                />
                            </label>
                            <label>
                                <span className='form-span'>Password </span>
                                <input type="password"
                                    className='form-field'
                                    value={password}
                                    onChange={update('password')}
                                    placeholder="Password"
                                />
                            </label>
                            <button
                            className='log-in-button'
                            type="submit"
                            disabled= {!email || !password}
                            >Log In</button>

                            <div className="signUp-demoUser">
                            <span>Don't have account? <button className='form-button' onClick={()=> history.push('/signup')}>Sign Up</button></span>
                            <span><button id="demo-user" onClick={handleDemoUserClick}>/ DemoUser</button></span>
                            </div>
                        </form>
                    </div>
            </div>
    )
}

export default LoginForm;
