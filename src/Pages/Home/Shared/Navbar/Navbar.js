import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../contexts/AuthProvider";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>

      <li>
        <Link to="/appointment">Appointment</Link>
      </li>

      {/* <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/contact">Contact Us</Link>
      </li> */}
     
      {user && (
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
      )}
    </>
  );

  const handlelogOut = () => {
    logOut()
      .then(() => {
        toast.success("You have successfully signed out", {
          position: "top-center",
          autoClose: 1000,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200  rounded-box w-52  "
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost normal-case  sm:text-sm lg:text-xl">
        Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal   ">{menuItems}</ul>
      </div>


     



      <div className="navbar-end">
        {user?.uid ? (
          <>
            <h6 className="text-sm mr-1" >{user?.displayName}</h6>
            <button
              onClick={handlelogOut}
              className="btn btn-outline btn-primary "
            >
              Sign Out
            </button>
          </>
        ) : (
          <button className="btn btn-outline btn-primary ">
            <Link to="/login">Sign In</Link>
          </button>
        )}
      </div>



      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>









    </div>
  );
};

export default Navbar;
