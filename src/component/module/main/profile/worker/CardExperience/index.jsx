import React from "react";
import experience from "../../../../../../assets/img/icons/experience.png";

const CardExperience = ({ company, position, month, year, description }) => {
  return (
    <li className="flex items-start gap-4 my-3">
      <div className="hidden md:block w-[74px] h-[74px] overflow-hidden">
        <img className="w-full h-auto" src={experience} alt={company} />
      </div>
      <div className="w-full md:w-4/5 border-b border-hirejob-frost">
        <h1 className="font-semibold text-xl text-hirejob-dark">{position}</h1>
        <h2 className="font-normal text-lg text-hirejob-slate">{company}</h2>
        <h3 className="font-normal text-base text-hirejob-gray">
          {`${month} ${year}`}
        </h3>
        <p className="font-normal text-sm text-justify leading-6 text-hirejob-dark pt-3 pb-6">
          {description}
        </p>
      </div>
    </li>
  );
};

export default CardExperience;
