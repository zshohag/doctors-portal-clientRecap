import React from "react";

const Button = ({ children }) => {
  return (
    <button className="btn bg-cyan-400 hover:bg-cyan-400  border-gray-50 hover:border-gray-50 ">
     { children ? children :' Get Started'}
    </button>
  );
};

export default Button;
