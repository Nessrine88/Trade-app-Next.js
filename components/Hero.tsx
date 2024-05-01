import React from "react";

const Hero = () => {
  return (
    <div
      className="container mx-auto px-4 py-8 text-center mt-5"
      style={{ paddingTop: "100px" }}
    >
      {/* Tagline */}
      <div className="container flex justify-center items-center">
  <span
    className="text-lg font-medium inline-block"
    style={{ 
      color: "#1d4ed8", 
      marginTop: "30px", 
      fontWeight: "bold",
      backgroundColor:"#EFF3FF",
      borderRadius:"1rem", 
      height:"4rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem"
    }}
  >
    BUILD FOR TRADERS BY TRADERS
  </span>
</div>


      {/* Title */}
      <div className="container">
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-dark-900 mt-2 p-0"
          style={{ maxWidth: "100%",fontSize:"2.7rem" , fontWeight:"900", lineHeight:"5rem"}}>
        Track, Analyze, and Improve Your
          </h1>
       </div>


      <h1
        className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-blue-500"
        style={{ color: "#1d4ed8" }}
      >
        Trading Performance
      </h1>

      {/* Description */}
      <p className="mb-4 text-md md:text-lg leading-relaxed text-gray-700">
        Edge Tracker is a powerful platform for traders to control their trading
        activities,
        <br />
        improve results, and make data-driven decisions.
      </p>

      {/* Call-to-action button */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-6">
        <button
          className="bg-blue-500 text-white px-3 py-1 mt-2 btn-round md:mr-4"
          style={{ backgroundColor: "#1d4ed8" }}
        >
          Get Started
        </button>
      </div>

      {/* Responsive image */}
      <div className="flex justify-center">
  <img
    src="Tablet 2.png"
    alt="Edge Tracker"
    className="mt-14"
    style={{ width: "1250px", height: "auto", margin: "0", padding: "0", marginTop: "5rem" }}
  />
</div>


    </div>
  );
};

export default Hero;
