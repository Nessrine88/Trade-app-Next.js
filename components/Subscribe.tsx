import React from "react";

const Subscribe = () => {
  return (
    <div className="mx-auto sm:px-10 md:px-10 lg:px-2 max-w-screen-xl mt-40 w-full sm:w-auto" style={{ width: "70vw" }}>
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
          <div className="grid sm:grid-cols-2 gap-4 w-70">
            <div className="1">
              <h5 className="mb-2 text-2xl font-bold flexStart tracking-tight text-white">
                Trade Wisely: Subscribe Today
              </h5>
              <p className="font-normal flexStart text-white">
                Unlock Trading insights. Stay Updated on market trends and
                analysis. Subscribe Now for informed trading decisions.
              </p>
            </div>
            <form>
              <div className="relative">
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 ps-10 mt-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-white dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Email"
                  style={{ backgroundColor: "white" }}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium btn-round text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
