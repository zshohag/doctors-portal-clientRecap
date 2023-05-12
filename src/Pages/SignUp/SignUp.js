import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser, signInWithGoogle, verifyEmail } =
    useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);

  const navigate = useNavigate();
  const location = useLocation();

  // verifyEmail
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate("/appointment");
  }

  const handleSignUp = (data) => {
    setSignUpError("");
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        /* toast.success(" User Created Successfully !", {
          position: "top-center",
          autoClose: 1000,
        }); */

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));

        // Email Verification
        // handleEmailVerfication();

        // if (user.emailVerified) {
        //   navigate(from, { replace: true });
        //   toast.warning(" Check your email & Login Again", {
        //     position: "top-center",
        //     autoClose: 2000,
        //   });
        // } else {
        //   navigate("/login");
        //   toast.error(
        //     " You email is not verified , Check your email & verify your email",
        //     {
        //       position: "top-center",
        //       autoClose: 2000,
        //     }
        //   );
        // }
      })

      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
        toast.error(signUpError, {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctors-portal-server-rouge-one.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setCreateUserEmail(email);
      });
  };

  // verifyEmail
  const handleEmailVerfication = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="mt-8">
        <h1 className="text-3xl">SIGN UP</h1>
        <div className=" mx-auto w-full max-w-md ">
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control  ">
              <label className="label ">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                placeholder="name"
                type="text"
                className="input input-bordered   "
              />
            </div>

            <div className="form-control  ">
              <label className="label ">
                <span className="label-text  ">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
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
                {errors.password && (
                  <p role="alert" className="text-red-500 m-1 ">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-2"></div>

            <input
              className="btn  w-full mb-2 "
              value="SIGN UP"
              type="submit"
            />
          </form>
          {/* {signUpError && (
            <p className="text-xl bg-red-500 text-white font-semibold m-4 p-1 ">
              {signUpError}
            </p>
          )} */}

          <p className="text-sm font-semibold mb-2">
            Already have an account?
            <span className="text-cyan-500">
              <Link to="/login"> Sign in</Link>
            </span>
          </p>
          <div className="divider  ">OR</div>

          <button
            onClick={signInWithGoogle}
            className=" border-solid border-2 border-neutral-400 p-2 w-full rounded-lg"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
