import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../contexts/AuthProvider";

const DisplayError = () => {
  const { error } = useRouteError();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogOut = () => {
    if (!user?.email) {
      toast.warning("You are not logged in. Try To login first", {
        position: "top-center",
        autoClose: 1000,
      });
      navigate("/login");

    } else {
      logOut()
        .then(() => {
          toast.success("You have successfully signed out", {
            position: "top-center",
            autoClose: 1000,
          });
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="m-20 p-10">
      <div>
        <h1 className="text-7xl text-red-500 ">
          <i>Oops!</i>
        </h1>
        <h5 className="text-3xl m-2 ">
          <i>Sorry, an unexpected error has occurred.</i>
        </h5>
        <p className="text-xl font-medium ">
          <i>{error?.statusText || error?.message}</i>
        </p>
        <h4 className="text-2xl m-10 ">
          <i>
            {" "}
            Please{" "}
            <button onClick={handlelogOut} className="btn btn-outline  ">
              Sign Out
            </button>{" "}
            Here Or Go Back{" "}
            <Link className="underline " to="/">
              Home
            </Link>
          </i>
        </h4>
      </div>
    </div>
  );
};

export default DisplayError;
