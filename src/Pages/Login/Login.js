import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");

  const [token] = useToken(loginUserEmail);

  const location = useLocation();

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(data.email);
        toast.success("User Login Successfully !", {
          position: "top-center",
          autoClose: 900,
        });

        // Email Verification
        // if (user.emailVerified) {
        //   navigate(from, { replace: true });
        //   toast.success("User Login Successfully !", {
        //     position: "top-center",
        //     autoClose: 500,
        //   });
        // } else {
        //   navigate('/');
        //   toast.error(" You email is not verified , Please verify your email", {
        //     position: "top-center",
        //     autoClose: 2000,
        //   });
        // }
      })
      .catch((error) => {
        console.log(error.message);
        //setLoginError(error.message);

        toast.error(
          "You email is not verified or  You have entered an invalid username or password",
          {
            position: "top-center",
            autoClose: 2000,
          }
        );
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Login Successfully !", {
          position: "top-center",
          autoClose: 900,
        });
        //

        //
        //navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mt-8  p-4 ">
      <h1 className="text-3xl">Login</h1>
      <div className=" mx-auto w-full max-w-md ">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label className="label ">
              <span className="label-text  ">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              placeholder="Your Email"
              type="email"
              className="input input-bordered"
            />
            <div>
              {errors.email && (
                <p role="alert" className="text-red-500 m-1 ">
                  {errors.email?.message}
                </p>
              )}
            </div>
          </div>

          <div className="form-control  ">
            <label className="label ">
              <span className="label-text  ">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters ",
                },
              })}
              placeholder="Password"
              type="password"
              className="input input-bordered   "
            />
            <div>
              {/* {loginError && (
                <p className="text-xl bg-red-500 text-white font-semibold m-4 p-1 ">
                  {loginError}
                </p>
              )} */}
            </div>
            <div>
              {errors.password && (
                <p role="alert" className="text-red-500 m-1 ">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <label className="label ">
              <span className="label-text  ">Forget Password?</span>
            </label>
          </div>

          <div className="mt-2"></div>

          <input className="btn  w-full mb-2 " value="Login" type="submit" />
        </form>

        <p className="text-sm font-semibold mb-2">
          New to Doctors Portal?
          <span className="text-cyan-500">
            <Link to="/signup"> Create new account</Link>
          </span>
        </p>
        <div className="divider  ">OR</div>

        <button
          onClick={handleSignInWithGoogle}
          className=" border-solid border-2 border-neutral-400 p-2 w-full rounded-lg"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
