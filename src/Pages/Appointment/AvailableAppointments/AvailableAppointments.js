import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOpiton from "./AppointmentOpiton";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appointmentData.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <div className="px-6">
      <h5 className="text-2xl m-10 ">
        Available Services on {format(selectedDate, "PP")}
      </h5>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {appointmentOptions.map((appointmentOption, i) => (
          <AppointmentOpiton
            //key={appointmentOption._id}
            key={i}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
          ></AppointmentOpiton>
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          treatment={treatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
