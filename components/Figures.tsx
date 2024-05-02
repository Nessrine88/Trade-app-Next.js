import React from "react";

const Figures = () => {
  return (
    <div className="z-5 w-full md:w-[70vw] flex flex-wrap justify-between bg-[rgba(255, 0, 0, 0.5)]">
      {/* Centered container */}
      <div className="my-4 flex-shrink-0 rounded-[10px] overflow-hidden w-full md:w-[22%] ">
        <div className="bg-white shadow-md px-4 py-3 flex items-center justify-center w-full rounded-[10px]" style={{ height: "4rem" }}>
          {/* Centered content */}
          <img src="img3.png" className="w-8 h-8 me-3" alt="" />
          <div className="w-full">
            <p className="text-gray-600 text-lg font-small" style={{ fontSize: "16px" }}>
              Users
            </p>
            <p className="text-gray-800 text-lg font-bold">72k+</p>
          </div>
        </div>
      </div>
      <div className="my-4 flex-shrink-0 rounded-[10px] overflow-hidden w-full md:w-[22%] ">
        <div className="bg-white shadow-md px-4 py-3 flex items-center justify-center w-full rounded-[10px]" style={{ height: "4rem" }}>
          <img src="Doller.png" className="w-8 h-8 me-3" alt="" />
          <div className="w-full">
            <p className="text-gray-600 text-lg font-small" style={{ fontSize: "16px" }}>
              Transaction 24h
            </p>
            <p className="text-gray-800 text-lg font-bold">$24.32k</p>
          </div>
        </div>
      </div>
      <div className="my-4 flex-shrink-0 rounded-[10px] overflow-hidden w-full md:w-[22%] ">
        <div className="bg-white shadow-md px-4 py-3 flex items-center justify-center w-full rounded-[10px]" style={{ height: "4rem" }}>
          <img src="img2.png" className="w-8 h-8 me-3" alt="" />
          <div className="w-full">
            <p className="text-gray-600 text-lg font-small w-full " style={{ fontSize: "16px" }}>
              Total Transaction
            </p>
            <p className="text-gray-800 text-lg font-bold">$32.25M</p>
          </div>
        </div>
      </div>
      <div className="my-4 flex-shrink-0 rounded-[10px] overflow-hidden w-full md:w-[22%] ">
        <div className="bg-white shadow-md px-4 py-3 flex items-center justify-center w-full rounded-[10px]" style={{ height: "4rem" }}>
          <img src="img1.png" className="w-8 h-8 me-3" alt="" />
          <div className="w-full ml-2">
            <p className="text-gray-600 text-lg font-small" style={{ fontSize: "16px" }}>
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
