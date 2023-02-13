import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate , setTreatment}) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatmentName : treatment.name,
      patientName: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null)

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
          <h3 className="text-lg font-bold"> {name} </h3>
          <p className="py-4"></p>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              value={date}
              className="input input-bordered w-full  m-2"
              disabled
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
              type="name"
              placeholder="Your Name"
              className="input input-bordered w-full  m-2 "
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full  m-2 "
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
