import React from "react";

const Figures = () => {
  return (
    <div
      className="max-container w-full lg:w-[70vw] flex flex-wrap justify-center gap-1 bg-[rgba(255, 0, 0, 0.5)]">
      {/* Centered container */}
      <div className="m-4 flex-shrink-0 rounded-lg overflow-hidden w-full md:w-48">
        <div
          className="bg-light-400 shadow px-4 py-3 flex items-center justify-center h-full w-full rounded-[25px]"
          style={{ border: "2px solid white"}}
        >
          {/* Centered content */}
          <img src="img3.png" className="w-6 h-6 me-3" alt="" />
          <div className="flex flex-col items-start w-[50%]">
            <p className="text-gray-600 text-lg font-small" style={{ fontSize: "14px" }}>
              Users
            </p>
            <p className="text-gray-800 text-lg font-bold">72k+</p>
          </div>
        </div>
      </div>
      <div className="m-4 flex-shrink-0 rounded-lg overflow-hidden w-full md:w-48">
        <div
          className="bg-light-400 shadow px-4 py-3 flex items-center justify-center h-full"
          style={{ border: "2px solid white", borderRadius: "25px" }}
        >
          <img src="Doller.png" className="w-6 h-6 me-3" alt="" />
          <div className="w-[50%]">
            <p className="text-gray-600 text-lg font-small" style={{ fontSize: "14px" }}>
              Transaction 24h
            </p>
            <p className="text-gray-800 text-lg font-bold">$24.32k</p>
          </div>
        </div>
      </div>
      <div className="m-4 flex-shrink-0 rounded-lg overflow-hidden w-full md:w-48">
        <div
          className="bg-light-400 shadow px-4 py-3 flex items-center justify-center h-full"
          style={{ border: "2px solid white", borderRadius: "25px" }}
        >
          <img src="img2.png" className="w-6 h-6 me-3" alt="" />
          <div className="w-[50%]">
            <p className="text-gray-600 text-lg font-small" style={{ fontSize: "14px" }}>
              Total Transaction
            </p>
            <p className="text-gray-800 text-lg font-bold">$32.25M</p>
          </div>
        </div>
      </div>
      <div className="m-4 flex-shrink-0 rounded-lg overflow-hidden w-full md:w-48">
        <div
          className="bg-light-400 shadow px-4 py-3 flex items-center justify-center h-full"
          style={{ border: "2px solid white", borderRadius: "25px" }}
        >
          <img src="img1.png" className="w-6 h-6 me-3" alt="" />
          <div className="w-[50%] ml-2">
            <p className="text-gray-600 text-lg font-small" style={{ fontSize: "14px" }}>
              Total Profit
            </p>
            <p className="text-gray-800 text-lg font-bold">$18.20M</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figures;
