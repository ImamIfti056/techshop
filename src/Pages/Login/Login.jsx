import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";
    console.log('from ', from)

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
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message)
                Swal.fire("No account under this email! Please create an account first");
            });
    }

    const handleCaptcha = e => {
        let user_captcha_value = e.target.value;
        console.log(user_captcha_value)

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
                                <input onBlur={handleCaptcha} type="text" name="captcha" placeholder="type captcha" id='user_captcha_input' className="input input-bordered" required />
                                {/* <button  className="btn btn-xs mt-3 ">Validate Captcha</button> */}
                            </div>
                            <div className="form-control mt-6">
                                {/* <input className="btn btn-primary" type="submit" value="Login" disabled={disableLoginButton} /> */}
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <SocialLogin/>
                        <p>New User? <Link to={'/signup'}>Create New Account</Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login