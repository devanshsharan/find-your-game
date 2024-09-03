import React from "react";
import "./Myface.css";
import myf from "../assets/WhatsApp Image 2024-09-03 at 00.11.54.jpeg";

const Myface = () => {
  return (
    <div className="face-container">
      <img src={myf} alt="My Face" className="face-image" />
    </div>
  );
};

export default Myface;

