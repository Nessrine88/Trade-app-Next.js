import React from "react";

const BeforeFooter = () => {
  return (
    <div className=" md:px-8 w-full md:w-[70vw] px-4">
      <div className="container mx-auto mt-12 py-8 bg-dark max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
          <div className="">
          <div className="text-grey-100">
            <div className="flex items-center">
              <img src="logo.png" className="w-9 h-9" alt="" />
              <span className="font-extrabold text-black">Edge</span>
              <span className="font-extrabold text-blue-500">tracker</span>
            </div>
            <p className="regular-14 mt-4 text-xs">
              The information provided on this trading journal website is for
              educational and informational purposes only. It is not intended
              as financial or investment advice. Trading in financial markets
              involves risk, and you should carefully consider your own risk
              tolerance before making any trading decisions.
            </p>
            {/* Additional paragraphs */}
          </div>
          </div>
          <div className="flex justify-around md:w-[50vw] ">
          <div className="text-black flex items-start flex-col">
            <h1 className="font-extrabold">Company</h1>
            <ul className="mt-6">
              <li className="mt-3">
                <a href="#" className="hover:underline">Home</a>
              </li>
              <li className="mt-3">
                <a href="#" className="hover:underline">Why us</a>
              </li>
              <li className="mt-3">
                <a href="#" className="hover:underline">Pricing</a>
              </li>
              <li className="mt-3">
                <a href="#" className="hover:underline">Help</a>
              </li>
              <li className="mt-3">
                <a href="#" className="hover:underline">Contact</a>
              </li>
              <li className="mt-3">
                <a href="#" className="hover:underline">About</a>
              </li>
            </ul>
          </div>
          <div className="text-black flex items-start flex-col">
            <h1 className="font-extrabold text-center">Social</h1>
            <ul className="mt-6">
              <li className="mt-3 flex items-center">
                <img src="x.png" className="w-6 h-6" alt="" />
                <a href="#" className="hover:underline ml-1">X (formally twitter)</a>
              </li>
              <li className="mt-3 flex items-center">
                <img src="insta.jpeg" className="w-6 h-6" alt="" />
                <a href="#" className="hover:underline ml-1">Instagram</a>
              </li>
              <li className="mt-3 flex items-center">
                <img src="discord.png" className="w-6 h-6" alt="" />
                <a href="#" className="hover:underline ml-1">Discord</a>
              </li>
              <li className="mt-3 flex items-center">
                <img src="youtube.png" className="w-6 h-6" alt="" />
                <a href="#" className="hover:underline ml-1">Youtube</a>
              </li>
              <li className="mt-3 flex items-center">
                <img src="tiktok.png" className="w-6 h-6" alt="" />
                <a href="#" className="hover:underline ml-1">Tiktok</a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
