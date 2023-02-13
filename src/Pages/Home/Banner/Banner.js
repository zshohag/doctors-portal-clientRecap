import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import Button from "../../../components/Button/Button";


const Banner = () => {
  return (
    <div className="hero " style={{ backgroundImage: `url(${bg})` }}  >
      <div className="hero-content flex-col lg:flex-row-reverse"  >
        <img
          src={chair}
          className=" rounded-lg shadow-xl sm:w-full md:w-full lg:w-1/2   "
          alt=""
        />

        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed iusto
            placeat praesentium, inventore quod dignissimos.
          </p>
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
