import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    //store booking info in the database

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price,
    };
    console.log(booking);

    fetch("https://doctors-portal-server-rouge-one.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking), // look up |^|
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success(" Booking Done Successfully  !", {
            position: "top-center",
            autoClose: 2000,
          });
          refetch();
        } else {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 3000,
          });
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold"> {treatmentName} </h3>
          <p className="py-4"></p>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              value={date}
              className="input input-bordered w-full  m-2"
            />

            <select name="slot" className="select select-bordered w-full m-2 ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full  m-2"
              readOnly
            />

            <input
              name="email"
              type="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered w-full  m-2"
              readOnly
            />

            <input
              name="phone"
              type="text"
              placeholder="Your Number"
              className="input input-bordered w-full  m-2 "
            />
            <br />
            <input
              className="input input-bordered w-full  m-2  bg-zinc-700 text-white "
              type="submit"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
