import React, { useState, useEffect } from "react";
import Input from "../../../../../base/Input";
import Button from "../../../../../base/Button";
import Tag from "../../../../../base/Tag";
import { useDispatch } from "react-redux";
import {
  createSkill,
  deleteSkill,
} from "../../../../../../configs/redux/action/skillAction";

const Skill = ({ mySkills }) => {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("");

  const handleCreateSkill = () => {
    dispatch(createSkill(skill, setSkill));
  };

  const handleDeleteSkill = (id) => {
    dispatch(deleteSkill(id));
  };

  return (
    <section className="w-full rounded-lg py-4 bg-hirejob-white shadow-md">
      <div className="font-semibold text-[22px] border-b border-[#C4C4C4] px-9 py-[18px] text-hirejob-dark">
        <h1>Skills</h1>
      </div>
      <div className="py-4 px-9 flex justify-between items-center gap-[30px]">
        <div className="w-full">
          <Input
            name={`skill`}
            placeholder={`Enter your skill (e.g., Java)`}
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </div>
        <div>
          <Button
            onClick={handleCreateSkill}
            colorButton={`secondary`}
            extra={`p-[13.5px]`}
          >
            Add
          </Button>
        </div>
      </div>
      {mySkills && (
        <ul className="pb-4 px-9 font-semibold text-xs mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
          {mySkills.map((item) => (
            <Tag key={item.id} deleteClick={() => handleDeleteSkill(item.id)}>
              {item.skill_name}
            </Tag>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Skill;
