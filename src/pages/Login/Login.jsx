import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { AuthContext } from '../../context/AuthProvider';
const Login = () => {
  const captchaRef=useRef();
  const [disabled,setDisabled]=useState(true);

  const {signInUser,logout}= useContext(AuthContext);
  useEffect(()=>{
    loadCaptchaEnginge(4); 
  },[])
    const handleLogin=(event)=>{
        event.preventDefault();
        const form= event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);
        signInUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
        })
    }

    const handleCaptcha=()=>{
      const value=captchaRef.current.value;
      console.log(value);
      if(validateCaptcha(value)) {
        setDisabled(false);
      }

      else {
        setDisabled(true);
      }
    }
    return (
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col md:space-x-28 lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  ref={captchaRef}
                  required
                />
                <button
                  onClick={handleCaptcha}
                  className="btn btn-outline btn-sm mt-5 mx-16"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-neutral"
                  type="submit"
                  value="Login"
                  disabled={disabled}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;