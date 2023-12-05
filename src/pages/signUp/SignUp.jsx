
const SignUp = () => {
    return (
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col md:space-x-28 lg:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold md:ml-24">SignUp!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
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
      </div>
    );
};

export default SignUp;