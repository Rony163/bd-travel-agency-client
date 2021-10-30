import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
// import './Login.css';

const Login = () => {
    const { googleSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';

    const manageRedirectory = () => {
        googleSignIn()
            .then(() => {
                history.push(redirect);
            })
    }

    return (
        <div>
            <div className='mt-5 pt-5'>
                <img className='img-fluid' style={{ width: '350px' }} src={logo} alt="" />
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center '>
                <h1 className='mb-3 text-info' >Please login Here</h1>
                <button onClick={manageRedirectory} className='bg-primary text-white fs-5 rounded'><i className="fab fa-google me-3 text-warning"></i>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;