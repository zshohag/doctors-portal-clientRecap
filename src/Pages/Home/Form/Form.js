import React from "react";
import Button from "../../../components/Button/Button";
/* import backgroundImage from "../../assets/images/appointment.png"; */
import backgroundImage from "../../../assets/images/appointment.png";

const Form = () => {
  return (
    <div
      className="px-4 py-24"
      style={{
        backgroundImage: `url(${backgroundImage})
    `,
        backgroundSize: "cover",
      }}
    >
      <h4 className="text-xl font-semibold text-cyan-300 ">Contact Us</h4>
      <h1 className="text-4xl text-white ">Stay connected with us</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-md block  mx-auto mt-6 "
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full max-w-md block mx-auto m-6"
        />
        <textarea
          placeholder="Your message"
          className="textarea textarea-bordered textarea-lg w-full max-w-md h-36 mb-4 "
        ></textarea>
        <br />
        <Button>SUBMIT</Button>
      </form>
    </div>
  );
};

export default Form;
