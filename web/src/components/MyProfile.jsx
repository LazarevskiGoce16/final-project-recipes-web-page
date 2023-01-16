import { HeaderTwo } from './HeaderTwo';
import { Footer } from './Footer';
import '../css/MyProfile.css';

export const MyProfile = () => {
    return (
        <>
        <HeaderTwo />
        <div className='my-profile-body'>
            <div className='my-profile-wrapper'>
                <div className='my-profile-title'>
                    <h1>My Profile</h1>
                </div>
                <div className='my-profile-content'>
                    <div className='my-profile-left-content'>
                        <img src="https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg" alt="avatar-pic"/>
                        <br />
                        <button className='avatar-pic-btn'>CHANGE AVATAR</button>
                    </div>
                    <div className='my-profile-right-content'>
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
                            <button className='save-button'>SAVE</button>
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
