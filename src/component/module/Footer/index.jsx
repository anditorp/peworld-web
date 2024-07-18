import React from "react";
import { Link } from "react-router-dom";
import imageLogo from "../../../assets/img/header-logo-white.png";

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-16 lg:px-[150px] py-[42px] font-normal text-lg leading-7 bg-hirejob-purple-normal text-hirejob-white">
      <div className="my-7 w-full sm:w-4/5 md:w-2/3 lg:w-1/3 mx-auto md:mx-0 text-center md:text-left">
        <img
          className="mx-auto md:mx-0 md:w-auto w-32"
          src={imageLogo}
          alt={`logo-peworld`}
        />
        <p className=" mt-[30px] mb-[30px] md:mb-[67px]">
          Strengthening Connections, Creating Opportunities: Discover Talent
          with Peworld.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-0 gap-7 border-t pt-7">
        <span>2024 Peworld. All right reserved</span>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-7 sm:gap-[79px]">
          <Link to={`/contact-phone`}>Contact</Link>
          <Link to={`/contact-email`}>Email</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
