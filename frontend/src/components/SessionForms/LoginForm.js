import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.css';
import './LoginForm.css';
import wallpaper from '../../assets/log-in.jpg'

import { login, clearSessionErrors } from '../../store/session';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector(state => state.errors.session);
    const dispatch = useDispatch();


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

    return (
            <div className='body'>
                    <div className='form-container'>
                        <form className='register-form' onSubmit={handleSubmit}>
                            <h2 className='form-title'>Log In</h2>
                            <div className='errors'>{errors?.email}</div>
                            <label for='chk' aria-hidden="true">
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


                        </form>
                    </div>
            </div>
    )
}

export default LoginForm;
