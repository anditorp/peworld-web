import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../../../../styles/pages/profile.module.css";
import iconMap from "../../../../../assets/img/icons/map.png";
import iconEdit from "../../../../../assets/img/icons/edit.png";
import imageUser from "../.././../../../assets/img/profile-img/user-noimage.png";
import Skill from "../../../../../component/module/main/profile/worker/Skill";
import WorkExperience from "../../../../../component/module/main/profile/worker/WorkExperience";
import Portofolio from "../../../../../component/module/main/profile/worker/Portofolio";
import Input from "../../../../../component/base/Input";
import Button from "../../../../../component/base/Button";
import {
  getWorkerProfile,
  updateWorkerProfile,
  updateWorkerProfilePhoto,
  updateWorkerUser,
} from "../../../../../configs/redux/action/workerAction";
import { getSkills } from "../../../../../configs/redux/action/skillAction";
import { getExperience } from "../../../../../configs/redux/action/experienceAction";
import { getPortofolio } from "../../../../../configs/redux/action/portofolioAction";

const EditWorker = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, profile } = useSelector((state) => state.worker);

  const getProfile = () => {
    dispatch(getWorkerProfile());
    dispatch(getSkills());
    dispatch(getExperience());
    dispatch(getPortofolio());
  };

  const handleUpdateProfile = () => {
    dispatch(updateWorkerProfile(user));
  };

  const handleChange = (e) => {
    const changeUser = {
      ...user,
      [e.target.name]: e.target.value,
    };
    dispatch(updateWorkerUser(changeUser));
  };

  const handleFileSelect = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    dispatch(updateWorkerProfilePhoto(file, user));
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <main>
        <div className="container max-w-full px-4 md:px-16 lg:px-[150px] py-5 lg:py-[70px] flex flex-col md:flex-row justify-between items-start gap-[30px]">
          <aside className="w-full md:w-2/5 xl:w-1/3 flex flex-col gap-[30px]">
            <div className="text-center md:text-left p-[30px] rounded-lg bg-hirejob-white shadow-md">
              <div className="w-[150px] h-[150px] mx-auto overflow-hidden rounded-[50%]">
                <img
                  className="w-full h-auto"
                  src={user.photo ? user.photo : imageUser}
                  alt={user.name}
                />
              </div>
              <div className="pt-5 pb-[31px] font-semibold text-[22px] text-hirejob-gray">
                <label
                  htmlFor="img-worker-upload"
                  className="flex justify-center items-center gap-1.5 cursor-pointer"
                >
                  <img className="" src={iconEdit} />
                  <span>Edit</span>
                </label>
                <input
                  id="img-worker-upload"
                  className="hidden"
                  type="file"
                  onChange={handleFileSelect}
                />
              </div>
              <h1 className="font-semibold text-[22px] mt-[13px] text-hirejob-dark">
                {user.name ? user.name : `Unknown`}
              </h1>
              <h2 className="font-normal text-sm mt-[10px] text-hirejob-dark">
                {user.job_desc}
              </h2>

              {user.domicile && (
                <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm mt-[13px] text-hirejob-gray">
                  <img className=" w-4 h-auto" src={iconMap} />
                  <span>{user.domicile}</span>
                </div>
              )}
              <h3 className="font-normal text-sm mt-[13px] text-hirejob-gray">
                {user.workplace}
              </h3>

              <p className=" my-[18px] font-normal text-sm text-justify leading-6 text-hirejob-gray">
                {user.description}
              </p>
            </div>
            <Button
              onClick={() => navigate(-1)}
              colorButton={`primary`}
              isBorder={true}
              isOutline={true}
              extra={`py-[15px]`}
            >
              Cancel
            </Button>
          </aside>

          <div className="w-full md:w-3/5 xl:w-2/3 flex flex-col gap-[30px]">
            <section className="w-full rounded-lg py-4 bg-hirejob-white shadow-md">
              <div className="font-semibold text-[22px] border-b border-[#C4C4C4] px-9 py-[18px] text-hirejob-dark">
                <h1>Personal Information</h1>
              </div>
              <div className="py-4 px-9">
                <Input
                  label={`Full Name`}
                  name={`name`}
                  value={user.name || ""}
                  onChange={handleChange}
                  placeholder={`Enter your full name`}
                />
                <Input
                  label={`Job Preference`}
                  name={`job_desc`}
                  value={user.job_desc || ""}
                  onChange={handleChange}
                  placeholder={`Enter your job preference (e.g., Fullstack Developer)`}
                />
                <Input
                  label={`Location`}
                  name={`domicile`}
                  value={user.domicile || ""}
                  onChange={handleChange}
                  placeholder={`Enter your location`}
                />
                <Input
                  label={`Workplace`}
                  name={`workplace`}
                  value={user.workplace || ""}
                  onChange={handleChange}
                  placeholder={`Enter your workplace (e.g., Telkom University)`}
                />
                <Input
                  label={`Personal Summary`}
                  type={`textarea`}
                  name={`description`}
                  rows={`6`}
                  value={user.description || ""}
                  onChange={handleChange}
                  placeholder={`Tell us about yourself in a few words`}
                />
              </div>
            </section>

            <Button
              onClick={handleUpdateProfile}
              colorButton={`primary`}
              extra={`py-[15px]`}
            >
              Save
            </Button>

            <Skill mySkills={profile.skills} />

            <WorkExperience myExperience={profile.experiences} />

            <Portofolio myPortofolio={profile.portofolios} />
          </div>
        </div>
      </main>
    </>
  );
};

export default EditWorker;
