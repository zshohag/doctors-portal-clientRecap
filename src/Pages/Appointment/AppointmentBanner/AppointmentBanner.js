import React from "react";
import bg from "../../../assets/images/bg.png";
import Button from "../../../components/Button/Button";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div className="hero px-10 " style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" hidden md:block lg:block " >
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              iusto placeat praesentium, inventore quod dignissimos.
            </p>
            <Button> Book Appointment </Button>
          </div>

          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AppointmentBanner;
