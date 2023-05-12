import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOpiton from "./AppointmentOpiton";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Home/Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  //const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-rouge-one.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  /* useEffect(() => {
    fetch("https://doctors-portal-server-rouge-one.vercel.app/appointmentOptions")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []); */

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-6">
      <h5 className="text-2xl m-10 ">
        Available Services on {format(selectedDate, "PP")}
      </h5>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {appointmentOptions.map((appointmentOption, i) => (
          <AppointmentOpiton
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
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
