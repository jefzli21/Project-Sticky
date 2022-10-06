import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SignupForm.css';
import { signup, clearSessionErrors } from '../../store/session';
import { useHistory } from 'react-router-dom';


function SignForm () {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const errors = useSelector(state => state.errors.session);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=> {
        return () => {
            dispatch(clearSessionErrors());
        }
    },[dispatch]);

    const update = field => {
        let setState;

        switch(field) {
            case 'email':
                setState = setEmail;
                break;
            case 'username':
                setState = setUsername;
                break;
            case 'password':
                setState = setPassword;
                break;
            case 'password2':
                setState = setPassword2;
                break;
            default:
                throw Error('Unknown field in Signup form');
        }

        return e => setState(e.currentTarget.value);
    }

    const usernameSubmit = e => {
        e.preventDefault();
        const user = {
            email,
            username,
            password
        };

        dispatch(signup(user));
    }
    return (
    <div className='body'>
        <div className='form-container'>
            <form className='register-form' onSubmit={usernameSubmit}>
                <h2 className='form-title'>Sign Up Form</h2>
                <div className='errors'>{errors?.email}</div>
                <label htmlFor='chk' aria-hidden="true">
                    <span className='form-span'>Email</span>
                    <input type='email'
                        value={email}
                        onChange={update('email')}
                        placeholder="Email"
                        className='form-field'
                    />
                </label>
                <div className='errors'>{errors?.username}</div>
                <label>
                    <span className='form-span'>username</span>
                    <input type='text'
                        value={username}
                        onChange={update('username')}
                        placeholder="Username"
                        className='form-field'
                    />
                </label>
                <div className='errors'>{errors?.password}</div>
                <label>
                    <span className='form-span'>Password</span>
                    <input type='password'
                        value={password}
                        onChange={update('password')}
                        placeholder="Password"
                        className='form-field'
                    />
                </label>
                <div className='errors'>
                    {password !== password2 && 'Confirm Password field must match'}
                </div>
                <label>
                    <span className='form-span'>Confirm Password</span>
                    <input type="password"
                        className='form-field'
                        value={password2}
                        onChange={update('password2')}
                        placeholder="Confirm Password"
                    />
                </label>
                <button
                    className='sign-up-button'
                    type="submit"
                    value="Sign Up"
                    // disabled={!email || !username || !password || password !== password2}
                    >
                        Sign Up
                </button>
                <span className='text-nav'>have account? <button className='form-button' onClick={()=> history.push(`/login`)}>Sign In</button></span>
            </form>
        </div>
    </div>
    )
}

export default SignForm;
