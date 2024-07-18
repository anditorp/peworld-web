import React, { useState, useEffect } from "react";
import Input from "../../../../../base/Input";
import Button from "../../../../../base/Button";
import TagExtra from "../../../../../base/TagExtra";
import { currentMonthYear } from "../../../../../../utils/helper";
import { useDispatch } from "react-redux";
import {
  createExperience,
  deleteExperience,
  readExperience,
  updateExperience,
} from "../../../../../../configs/redux/action/experienceAction";

const WorkExperience = ({ myExperience }) => {
  const dispatch = useDispatch();

  const [experience, setExperience] = useState({
    position: "",
    company: "",
    work_date: currentMonthYear(),
    description: "",
  });

  const handleAddExperience = () => {
    dispatch(createExperience(experience, setExperience));
  };

  const handleGetExperience = (id) => {
    dispatch(readExperience(id, setExperience));
  };

  const handleDeleteExperience = (id) => {
    dispatch(deleteExperience(id));
  };

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full rounded-lg py-4 bg-hirejob-white shadow-md">
      <div className="font-semibold text-[22px] border-b border-[#C4C4C4] px-9 py-[18px] text-hirejob-dark">
        <h1>Work Experience</h1>
      </div>
      <div className="py-4 px-9">
        <Input
          label={`Position`}
          name={`position`}
          placeholder={`Enter your position (e.g., Web Developer)`}
          value={experience.position}
          onChange={handleChange}
        />
        <div className="flex justify-between flex-wrap xl:flex-nowrap xl:gap-5">
          <div className="w-full">
            <Input
              label={`Company`}
              name={`company`}
              placeholder={`Enter your company (e.g., Google)`}
              value={experience.company}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <Input
              label={`Month/Year`}
              type="month"
              name={`work_date`}
              value={experience.work_date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-8">
          <Input
            label={`Job Description`}
            type={`textarea`}
            name={`description`}
            rows={`6`}
            placeholder={`Share your job responsibilities briefly`}
            value={experience.description}
            onChange={handleChange}
          />
        </div>
        <div
          className={`pt-12 border-t ${
            myExperience && `pb-12 border-b`
          } border-hirejob-frost`}
        >
          <Button
            onClick={handleAddExperience}
            colorButton={`secondary`}
            isBorder={true}
            isOutline={true}
            extra={`p-[13.5px]`}
          >
            Add Work Experience
          </Button>
        </div>
        {myExperience && (
          <ul className="pt-8 pb-4 mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
            {myExperience.map((exp) => (
              <TagExtra
                key={exp.id}
                date={`${exp.work_month} ${exp.work_year}`}
                position={exp.position}
                company={exp.company}
                deleteClick={() => handleDeleteExperience(exp.id)}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default WorkExperience;
