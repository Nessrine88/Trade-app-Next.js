import React from "react";

const Clients = () => {
  return (
    <div className="flex flex-col items-center md:w-[70vw] w-full ">
      <h4 className="mb-4 text-2xl text-center mt-4 font-bold leading-none tracking-tight text-gray-900 dark:text-black">
        What Our Clients Say About Us
      </h4>
      <h4 className="font-normal">Our Customer Feedback</h4>
      <div className="mt-4 flex flex-col md:flex-row justify-center ">
        <a
          href="#"
          className="flex flex-col flex-start md:w-[50%] p-6 bg-light border-white rounded-lg shadow-md hover:bg-white dark:bg-white dark:border-gray-100 dark:hover:bg-white mb-4 md:mb-0"
        >
          <p className="font-normal text-black dark:text-black">
            <span className="text-4xl">“</span> Edge Tracker has revolutionized
            my trading game. With its powerful analytics and collaborative
            features, I've seen a significant improvement in my performance.
            It's an essential tool for both individual traders and teams. Highly
            recommended!
          </p>
          <div className="flex flex-row mt-4 items-center" >
            <img
              src="john.jpeg"
              alt="John Doe"
              className="w-9 h-9 rounded-full mt-3"
            />
            <div className="flex flex-col ml-2">
              <span className="text-sm font-semibold">John Doe</span>
              <span className="text-xs">Professional trader and fund manager</span>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="md:ml-4 flex flex-col flex-start md:w-[50%] p-6 bg-light border-white rounded-lg shadow-md hover:bg-white dark:bg-white dark:border-gray-100 dark:hover:bg-white mb-4 md:mb-0"
        >
          <p className="font-normal text-black dark:text-black">
            <span className="text-4xl">“</span>
            As a novice trader, Edge Tracker is a game changer for me. The daily
            insights and personalized recommendations have helped me make
            smarter trading decisions. It's user-friendly and packed with
            valuable features.
          </p>
          <div className="flex flex-row mt-4 items-center">
            <img
              src="jane.jpeg"
              alt="Jane Smith"
              className="w-9 h-9 rounded-full mt-3"
            />
            <div className="flex flex-col ml-2">
              <span className="text-sm font-semibold">Jane Smith</span>
              <span className="text-xs">Beginner Trader and Student</span>
            </div>
          </div>
        </a>
      </div>
      <div className="mt-4 flex flex-col md:flex-row justify-center">
        <a
          href="#"
          className=" flex flex-col flex-start md:w-[50%] p-6 bg-light border-white rounded-lg shadow-md hover:bg-white dark:bg-white dark:border-gray-100 dark:hover:bg-white mb-4 md:mb-0"
        >
          <p className="font-normal text-black dark:text-black">
            <span className="text-4xl">“</span> Edge tracker has transformed how
            our team approaches trading. The ability to view overall trading
            details, analyze performance, and share strategies has greatly
            enhanced our results. It's a must-have tool for any trading team.
          </p>
          <div className="flex flex-row mt-4 items-center">
            <img
              src="sarah.jpeg"
              alt="Sarah Thompson"
              className="w-9 h-9 rounded-full mt-3"
            />
            <div className="flex flex-col ml-2">
              <span className="regular-18 bold-16">Sarah Thompson</span>
              <span className="regular-14">
                Financial analyst and team member
              </span>
            </div>
          </div>
        </a>
        <a
          href="#"
          className=" md:ml-4 flex flex-col flex-start md:w-[50%] p-6 bg-light border-white rounded-lg shadow-md hover:bg-white dark:bg-white dark:border-gray-100 dark:hover:bg-white mb-4 md:mb-0"
        >
          <p className="font-normal text-black dark:text-black">
            <span className="text-4xl">“</span> Build and manage trading teams
            effortlessly. Create teams, track team members' trading details, and
            gain insights into overall performance. Stay competitive with the
            leaderboard and foster collaboration for trading success.
          </p>
          <div className="flex flex-row mt-4 items-center">
            <img
              src="miche.jpeg"
              alt="Jane Smith"
              className="w-9 h-9 rounded-full mt-3"
            />
            <div className="flex flex-col ml-2">
              <span className="regular-18 bold-16">Michael Johnson</span>
              <span className="regular-14">Fund Manager And Team Leader</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Clients;
