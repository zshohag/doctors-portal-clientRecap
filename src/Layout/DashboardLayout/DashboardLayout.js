import React, { useContext } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Navbar from "../../Pages/Home/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  //console.log(isAdmin);
  const bookings =  useLoaderData()
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
          


            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                  <Link to="/dashboard/adddoctor">Add Doctor</Link>
                  <Link to="/dashboard/managedoctors">Manage Doctors</Link>
                  
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
