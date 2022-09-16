import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <span className="loader"></span>
        <span className="loader" style={{ animationDelay: "0.2s" }}></span>
        <span className="loader" style={{ animationDelay: "0.4s" }}></span>
      </div>
    </div>
  );
};

export default Loader;
