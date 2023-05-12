import React from "react";

const AppointmentOpiton = ({ appointmentOption, setTreatment }) => {
  const { name, slots ,price } = appointmentOption;

  return (
    <div>
      <div className="card  bg-base-100 border-solid border-2 border-neutral-400">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : " Try Another Day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "SPACES " : "SPACE"} AVAILABLE
          </p>
          <p>Price : ${price}</p>
          <div className="card-actions">
            <label
            disabled={slots.length === 0 }
              htmlFor="booking-modal"
              className="btn bg-cyan-400 hover:bg-cyan-400  border-gray-50 hover:border-gray-50 "
              onClick={() => setTreatment(appointmentOption)}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOpiton;
