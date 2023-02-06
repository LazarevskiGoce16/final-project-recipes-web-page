import axios from 'axios';
import { Header } from './Header';
import { Footer } from './Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        axios.post('http://127.0.0.1:10002/api/v1/auth/login', {
            email : email,
            password : password
        })
        .then(res => {
            localStorage.setItem('jwt', res.data);
            console.log(`User log in OK! Token: ${res.data.token}`);
            navigate('/my-profile');
        })
        .catch(err => {
            console.log(err, 'User credentials not OK!');
        })
    };

    return (
        <>
        <Header />
        <div className='login-body'>
            <div className='login-wrapper'>
                <div className='login-title'>
                    <h1>Log In</h1>
                </div>
                <div className='login-content'>
                    <div className='login-left-content'>
                        <h1>
                            <span style={{color: "#F0972A"}}>Welcome to </span>
                            <span style={{color: "#626262"}}>Baby's</span>
                        </h1>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                    <div className='login-right-content'>
                        <label htmlFor="">Email</label>
                        <br />
                        <input type="email" name="email" className='email-input' placeholder='user@domain.com' onChange={e => setEmail(e.target.value)} value={email} required/>
                        <br />
                        <label htmlFor="">Password</label>
                        <br />
                        <input type="password" name="password" className='password-input' placeholder='********' onChange={e => setPassword(e.target.value)} value={password} required/>
                        <br />
                        <button className='login-button' onClick={handleSubmit}>LOG IN</button>
                    </div>
                </div> 
            </div>
        </div>
        <Footer />
        </>
    )
};
