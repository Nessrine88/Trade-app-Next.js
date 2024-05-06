import React from "react";

const Subscribe = () => {
  return (
    <div className=" md:px-10 lg:px-2 md:w-[70vw] w-full ">
      {/* Added max-w-screen-xl for full-screen layout */}
      <div className="mt-4">
        {/* Added margin top for space */}
        <div
          className="flex-col max-container subsc container block max-w-full md:pl-6 pl-0 border-blue-500 rounded-lg shadow hover:bg-blue-800 dark:border-blue-900 dark:hover:bg-blue"
          style={{
            borderRadius: "25px",
            backgroundImage: "linear-gradient(to right, #02356D, #01072A)",
          }}
        >
          <div className="grid md:grid-cols-2  md:pt-0 pt-5 grid-cols-1 gap-4 w-full items-center p-0">
            <div className="1">
              <h5 className="md:mb-2 mb-0 pl-6  lg:text-2xl md:text-2xl flexStart tracking-tight text-white text-[1rem] font-bold">
                Trade Wisely: Subscribe Today
              </h5>
              <p className="font-normal pl-6  flexStart text-white text-xs lg:text-sm md:text-sm">
                Unlock Trading insights. Stay Updated on market trends and
                analysis. Subscribe Now for informed trading decisions.
              </p>
            </div>
            <form className="gridline">
              <div className="relative ">
                <input
                  type="search"
                  id="search"
                  className="md:mt-6 mt-0 block w-full p-2 text-xs lg:text-sm md:text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-white dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Email"
                  style={{ backgroundColor: "white" }}
                />
                <button
                  type="submit"
                  className="text-white relative float-right clear-left bottom-[1.85rem] md:bottom-[1.97rem] right-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium btn-round text-xs px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
