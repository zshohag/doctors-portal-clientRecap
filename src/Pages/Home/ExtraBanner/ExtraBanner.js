import React from "react";
import doctors from "../../../assets/images/doctor.png";
import bgBanner from "../../../assets/images/appointment.png";
import Button from "../../../components/Button/Button";

const ExtraBanner = () => {
  return (
    <section className="mt-24 " style={{ backgroundImage: `url(${bgBanner})` }}>
      <div className="hero   ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctors} alt="doctors" className=" -mt-40  lg:w-1/2 rounded-lg hidden md:block lg:block  " />
          <div>
            <h5 className="text-2xl text-cyan-200 ">Appointment</h5>
            <h1 className="text-5xl font-semibold text-white ">Make an appointment Today</h1>
            <p className="py-6 text-white ">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <Button/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraBanner;
