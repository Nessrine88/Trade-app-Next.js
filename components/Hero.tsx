import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center mt-5 pt-5 md:pt-5 lg:pt-32">
      {/* Tagline */}
      <div className="flex justify-center items-center">
        <span
          className="flex items-center justify-center lg:text-[18px] text-xs text-[#1d4ed8] mt-[60px] lg:mt-[10px] font-bold bg-[#EFF3FF] rounded-[0.5rem] p-[0.5rem] lg:h-[4rem] lg:rounded-[1rem] ">
          BUILD FOR TRADERS BY TRADERS
        </span>
      </div>

      {/* Title */}
      <div className="container">
        <h1
          className="text-3xl md:text-4xl lg:text-[2.9rem] font-extrabold leading-tight text-dark-900 mt-2"
          style={{ maxWidth: "100%", fontWeight: "900", lineHeight: "3.5rem" }}
        >
          Track, Analyze, and Improve Your
        </h1>
      </div>

      <h1
        className="mb-4 lg:text-[2.9rem] text-[1.6rem] md:text-4xl font-extrabold leading-tight text-blue-500"
        style={{ color: "#1d4ed8" }}
      >
        Trading Performance
      </h1>

      {/* Description */}
      <p className="mb-4 lg:text-base sm:text-sm leading-relaxed text-gray-700 text-sm">
        Edge Tracker is a powerful platform for traders to control their trading
        activities,
        <br />
        improve results, and make data-driven decisions.
      </p>

      {/* Call-to-action button */}
      <div className="flex justify-center items-center mb-6">
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
          style={{ width: "100%", height: "auto", margin: "0", padding: "0", marginTop: "5rem" }}
        />
      </div>
    </div>
  );
};

export default Hero;
