import React from "react";

const Detailcards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 mb-12 max-w-7xl mx-auto"style={{width:"70vw"}}>
      <div>
      <div className="pb-5"style={{width:"100%",maxHeight:"50%"}}>
        <a
          href="#"
          className="flex flex-col p-5 bg-blue-600 border-blue-700 rounded-3xl shadow-lg hover:bg-blue-700 dark:bg-blue-700 dark:border-gray-700 dark:hover:bg-blue-800"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Trades Details
          </h5>
          <p className="font-normal text-white dark:text-white">
            View and analyze your trade details effortlessly. Explore
            comprehensive information about your trade, including entry/exit
            prices, position sizes, and durations. Capture a snapshot for a
            detailed trade overview.
          </p>
          <img
            src="card1.png"
            alt="image"
            className="w-48 mx-auto mt-8 rounded-lg mr-2 pr-1"
          />
        </a>
      </div>
      <div className=" "style={{width:"100%",maxHeight:"50%"}}>
        <a
          href="#"
          className="flex flex-col p-5 bg-light border-blue-500 rounded-3xl shadow hover:bg-white dark:bg-blue-500 dark:border-gray-700 dark:hover:bg-white-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            Daily Insights
          </h5>
          <p className="font-normal text-black dark:text-black">
            Gain valuable trading insights based on your daily trades. Unlock
            powerful analysis and personalized recommendations to enhance your
            trading strategies and capitalize on market opportunities.
          </p>
          <img
            src="card3.png"
            alt="image"
            className="w-48 mx-auto mt-8 rounded-lg mr-2 pr-1"
          />
        </a>
      </div>
      </div>
      <div className="pt-16">
      <div className="flex pb-5 justify-start"style={{width:"100%", maxHeight:"50%"}}>
        <a
          href="#"
          className="flex flex-col  p-5 bg-[#DBE4FD] border-gray-400 rounded-3xl shadow-lg hover:bg-gray-300 dark:bg-gray-300 dark:border-gray-400 dark:hover:bg-gray-400 md:mt-0 "
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{ color: "#182853" }}>
            Create Your Team
          </h5>
          <p className="font-normal" style={{ color: "#454647" }}>
            Build and manage trading teams effortlessly. Create teams, track
            team members' trading details, and gain insights into overall
            performance. Stay competitive with the leaderboard and foster
            collaboration for trading success.
          </p>
          <img
            src="card2.png"
            alt="image"
            className="w-48 mx-auto mt-4 rounded-lg mr-2 pr-2"
          />
        </a>
      </div>
      <div className="flex"style={{width:"100%",minHeight:"50%"}}>
        <a
          href="#"
          className="flex flex-col p-5 bg-black text-white border border-white rounded-3xl shadow-lg hover:bg-gray-700 dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Traders LeaderBoard</h5>
          <p className="font-normal text-white">
            Rise to the top of the ranks based on your daily trades. Compete
            with fellow traders, track your performance, and see how you stack
            up on the dynamic Leaderboard.
          </p>
          <img src="card4.png" alt="image" className="w-36 mx-auto mt-8 rounded-lg mr-0 pr-0 ml-auto" />
        </a>
      </div>
      </div>
    </div>
  );
};

export default Detailcards;
