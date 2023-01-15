import { Header } from './Header';
import { Footer } from './Footer';
import '../css/Register.css';

export const Register = () => {
    return (
        <>
        <Header />
        <div className='register-body'>
            <div className='register-wrapper'>
                <div className='register-title'>
                    <h1>Create Account</h1>
                </div>
                <div className='register-content'>
                    <div className='register-left-content'>
                        <h1>
                            <span style={{color: '#F0972A'}}>Create your </span>
                            <span style={{color: '#626262'}}>account</span>
                        </h1>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                    </div>
                    <div className='register-right-content'>
                        <div className='left-column'>
                            <label htmlFor="">First Name</label>
                            <br />
                            <input type="text" placeholder='John'/>
                            <br />
                            <label htmlFor="">Email</label>
                            <br />
                            <input type="email" placeholder='john@smith.com'/>
                            <br />
                            <label htmlFor="">Password</label>
                            <br />
                            <input type="password" placeholder='********'/>
                            <br />
                            <button className='register-button'>CREATE ACCOUNT</button>
                        </div>
                        <div className='right-column'>
                            <label htmlFor="">Last Name</label>
                            <br />
                            <input type="text" placeholder='Smith'/>
                            <br />
                            <label htmlFor="">Birthday</label>
                            <br />
                            <input type="date" max='2023-01-01' required pattern="(?:((?:0[1-9]|1[0-9]|2[0-9])\/(?:0[1-9]|1[0-2])|(?:30)\/(?!02)(?:0[1-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/(?:19|20)[0-9]{2})" className='input-date'/>
                            <br />
                            <label htmlFor="">Repeat Password</label>
                            <br />
                            <input type="password" placeholder='********'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
};
