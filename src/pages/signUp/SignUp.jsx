import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
     const {createUser}=useContext(AuthContext);
     const onSubmit = (data) => {
            createUser(data.email,data.password)
            .then(result=>{
                const loggedInUser=result.user;
                console.log(loggedInUser);
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
