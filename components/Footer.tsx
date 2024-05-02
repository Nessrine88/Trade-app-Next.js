const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-white-100 flex-wrap flex md:w-[70vw]">
        <footer className="z-20 w-full p-4 border-t border-white-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white-200 dark:border-white-200 mx-auto">
          <span className="text-sm text-gray-900 sm:text-center dark:text-gray-900">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Edgetracker
            </a>
            . All Rights Reserved.
          </span>
          <div className="">
            <span className="text-gray-900 regular-14 underline">
              Terms and Condition
            </span>
            <span className="text-gray-900 ml-4 regular-14 underline">
              Privacy Policy
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
