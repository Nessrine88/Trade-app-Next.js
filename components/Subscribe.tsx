import React from "react";

const Subscribe = () => {
  return (
    <div className=" md:px-10 lg:px-2 lg:w-[70vw] lg:mt-40 mt-20 w-full m-0">
      {/* Added max-w-screen-xl for full-screen layout */}
      <div className="mt-4">
        {/* Added margin top for space */}
        <div
          className="flex-col max-container subsc container block max-w-full p-6 border-blue-500 rounded-lg shadow hover:bg-blue-800 dark:border-blue-900 dark:hover:bg-blue"
          style={{
            borderRadius: "25px",
            backgroundImage: "linear-gradient(to right, #02356D, #01072A)",
          }}
        >
          <div className="grid grid-cols-1 gap-4 w-full">
            <div className="1">
              <h5 className="mb-2 lg:text-2xl md:text-2xl flexStart tracking-tight text-white text-[1rem] font-bold">
                Trade Wisely: Subscribe Today
              </h5>
              <p className="font-normal flexStart text-white text-xs lg:text-sm md:text-sm">
                Unlock Trading insights. Stay Updated on market trends and
                analysis. Subscribe Now for informed trading decisions.
              </p>
            </div>
            <form>
              <div className="relative">
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 ps-10 mt-4 text-xs lg:text-sm md:text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-white dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Email"
                  style={{ backgroundColor: "white" }}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium btn-round text-xs px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
