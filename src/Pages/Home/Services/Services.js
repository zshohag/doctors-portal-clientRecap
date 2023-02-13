import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import Button from "../../../components/Button/Button";

const Services = () => {
  return (
    <div className="py-4" >
        <h5 className="font-bold text-cyan-600 	 " >OUR SERVICES</h5>
        <h2 className="text-2xl">Services We Provide</h2>
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-4  ">
        <div className="card w-30 bg-base-100 shadow-xl">
          <figure className="px-4 pt-10">
            <img src={fluoride} alt="fluoride" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <Button/>
            </div>
          </div>
        </div>

        <div className="card w-30 bg-base-100 shadow-xl">
          <figure className="px-4 pt-10">
            <img src={cavity} alt="cavity" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cavity Filling</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <Button/>
            </div>
          </div>
        </div>

        <div className="card w-30 bg-base-100 shadow-xl">
          <figure className="px-4 pt-10">
            <img src={whitening} alt="whitening" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Teeth Whitening</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <Button/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
