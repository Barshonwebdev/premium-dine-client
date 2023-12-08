import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
     const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm();
     const {createUser,updateUserProfile}=useContext(AuthContext);
     const navigate=useNavigate();
     const onSubmit = (data) => {
            createUser(data.email,data.password)
            .then(result=>{
                const loggedInUser=result.user;
                console.log(loggedInUser);
                updateUserProfile(data.name,data.photoURL)
                .then(()=>{
                    const savedUser={name:data.name,email:data.email};
                    fetch("http://localhost:5000/users", {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                      },

                      body: JSON.stringify(savedUser),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.insertedId) {
                          reset();
                          Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You have been Registered!",
                            showConfirmButton: false,
                            timer: 1500,
                          });
                          navigate("/");
                        }
                      });
                   
                })
                
            })
     };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col md:space-x-28 lg:flex-row-reverse">
        <div className="text-center lg:text-left ">
          <h1 className="text-5xl font-bold md:ml-24">SignUp!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <span className="text-red-600 mt-1">email required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                <span className="text-red-600 mt-1">password required</span>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-neutral"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <button className="bg-orange-500 text-white btn">Login!</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Helmet>
        <title>Premium Dine | Sign Up</title>
      </Helmet>
    </div>
  );
};

export default SignUp;
