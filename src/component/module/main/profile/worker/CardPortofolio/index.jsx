import React from "react";
import { Link } from "react-router-dom";
import { convertToHttps } from "../../../../../../utils/helper";
import imageNoFolio from "../../../../../../assets/img/portofolio/no-portofolio.png";

const CardPortofolio = ({ children, link, image }) => {
  return (
    <Link
      to={convertToHttps(link)}
      className="w-full sm:w-[45%] md:w-[30%] lg:w-full xl:w-[30%] flex flex-col flex-nowrap items-center justify-start "
    >
      <div className="w-full h-full md:h-[55%] lg:h-[90%] xl:h-[70%] max-h-[200px] overflow-y-hidden border border-hirejob-frost">
        <img
          className="w-full h-full bg-cover bg-center"
          src={image ? image : imageNoFolio}
          alt="Portofolio"
        />
      </div>

      <span className="font-normal text-sm text-center py-1.5">{children}</span>
    </Link>
  );
};

export default CardPortofolio;
