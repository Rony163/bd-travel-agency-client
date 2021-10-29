import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
// import './Login.css';

const Login = () => {
    const { googleSignIn } = useFirebase();

    return (
        <div>
            <div className='mt-5 pt-5'>
                <img className='img-fluid' style={{ width: '350px' }} src={logo} alt="" />
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center '>
                <h1 className='mb-3 text-info' >Please login Here</h1>
                <button onClick={googleSignIn} className='bg-primary text-white fs-5 rounded'><i className="fab fa-google me-3 text-warning"></i>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;