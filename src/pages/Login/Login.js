import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { googleSignIn } = useFirebase();

    return (
        <div className='parent'>
            <h1 className="text-info mt-5">Please Log in with Google:</h1>
            <button className='child' onClick={googleSignIn}>
                <span className='p-2 btn-rounded text-white fw-bold'>
                    <i class="fab fa-google me-3 text-warning"></i>
                    Google Sign in
                </span>
            </button>
        </div>
    );
};

export default Login;