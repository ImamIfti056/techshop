import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Login = () => {

    const [disableLoginButton, setDisableLoginButton] = useState(true)

    const { signIn } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }

    const handleCaptcha = e => {
        let user_captcha_value = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisableLoginButton(false)
        }

        else {
            alert('Captcha Does Not Match');
        }
    }

    return (
        <>
            <Helmet>
                <title>Login | Techshop</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda exceptur</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" name="captcha" placeholder="type captcha" id='user_captcha_input' className="input input-bordered" required />
                                <button onClick={handleCaptcha} className="btn btn-xs mt-3 ">Validate Captcha</button>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" disabled={disableLoginButton} />
                            </div>
                        </form>
                        <p>New User? <Link to={'/signup'}>Create New Account</Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login