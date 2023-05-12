import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Home/Shared/Loading/Loading";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const url = `https://doctors-portal-server-rouge-one.vercel.app/bookings?email=${user?.email}`;
  console.log(url);
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")} `,
        },
      });
      const data = await res.json();

      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-2xl mb-5 ">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Patient Name</th>
              <th>Treatment Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings && 
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className=" btn btn-sm ">Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <button className=" ">
                        {" "}
                        <span className="text-green-500">Paid</span>{" "}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
