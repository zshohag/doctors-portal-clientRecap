import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg";

const Testimonials = () => {
  return (
    <div  className="px-4 py-16 " >
      <div className=" flex justify-between items-center " >
        <div className="text-left" >
          <h5 className="text-xl text-cyan-400 font-semibold">Testimonial</h5>
          <h3 className="text-3xl">What Our Patients Says</h3>
        </div>
        <figure  >
            <img className="sm:w-16 w-36"  src={quote} alt="" />
        </figure>
      </div>

      <section className="grid gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-20  ">
        <div className="card  bg-base-100 border-solid border-2 border-neutral-400 ">
          <div className="card-body">
            <p className=" mb-4 leading-5">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card-actions justify-around items-center ">
              <img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src={people1} alt="" />
              <div>
                <h4 className="text-xl">Winson Herry</h4>
                <h6 className="text-sm">California</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 border-solid border-2 border-neutral-400 ">
          <div className="card-body">
            <p className=" mb-4 leading-5">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card-actions justify-around items-center ">
              <img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src={people2} alt="" />
              <div>
                <h4 className="text-xl">Winson Herry</h4>
                <h6 className="text-sm">California</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 border-solid border-2  border-neutral-400 ">
          <div className="card-body">
            <p className=" mb-4 leading-5">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card-actions justify-around items-center ">
              <img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src={people3} alt="" />
              <div>
                <h4 className="text-xl">Winson Herry</h4>
                <h6 className="text-sm">California</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;


