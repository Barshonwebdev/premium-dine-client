import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import { AuthContext } from "../../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const Login = () => {
  const { reset } = useForm();
  const captchaRef = useRef();
  const [disabled, setDisabled] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password).then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      navigate(from, { replace: true });
    });
  };

  const handleCaptcha = () => {
    const value = captchaRef.current.value;
    console.log(value);
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const savedUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://premium-dine-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then(() => {
          reset();
          navigate(from, { replace: true });
        });
    });
  };
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
                onBlur={handleCaptcha}
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-neutral"
                type="submit"
                value="Login"
                disabled={disabled}
              />
            </div>
            <p>Or,</p>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-neutral bg-blue-700"
            >
              Google Sign In
            </button>
            <p>
              New here?{" "}
              <Link to="/signup">
                <button className="bg-orange-500 text-white btn">
                  Sign Up!
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Helmet>
        <title>Premium Dine | Login</title>
      </Helmet>
    </div>
  );
};

export default Login;
