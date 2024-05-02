import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center"
    style={{margin:"auto", height:"80px"}}
    >
      {" "}
      {/* Centering container */}
      <nav
        className="border border-gray-200 flex items-center justify-between py-5 relative z-30  lg:w-[70vw] md:w-[70vw] w-full" 
        style={{ backgroundColor: "#ffffff", borderRadius: "0 0 1.5rem 1.5rem" }}
      >
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="lg:w-[50px] lg:h-[50px] mr-8 ml-4 w-9 h-9"
          />
          <div
            style={{
              height: "2rem", // Adjust as needed
              width: "2px", // Thin line
              backgroundColor: "#E1E2E2",
              marginRight: "2rem", // Space between separator and menu
            }}
          />
           <div className="ml-0">
          {" "}
          {/* Added more left margin */}
          <ul className="hidden lg:flex gap-10">
            <li>
              <Link href="#">Why Us</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>
        </div>

       

        <div className="flex gap-1 mr-7">
          {" "}
          {/* Adjusted the left margin */}
          <button className="lg:text-base md:text-base underline bg-white text-black py-2 rounded text-sm px-2">
            Login
          </button>
          <button
            className="lg:text-base md:text-base text-white lg:px-4 lg:py-2  py-2 btn-round text-xs px-1 bg-[#1d4ed8]">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="block lg:hidden p-2 rounded" aria-label="Open menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
