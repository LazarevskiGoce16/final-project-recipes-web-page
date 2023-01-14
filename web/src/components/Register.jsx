import { Header } from './Header';
import { Footer } from './Footer';
import '../css/Register.css';

export const Register = () => {
    return (
        <>
        <Header />
        <div className='register-body'>
            <div className='register-wrapper'>
                <div className='register-wrapper'>
                    <h1>Create Account</h1>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
};
