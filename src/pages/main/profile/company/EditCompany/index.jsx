import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../../../styles/pages/profile.module.css";
import iconMap from "../../../../../assets/img/icons/map.png";
import iconEdit from "../../../../../assets/img/icons/edit.png";
import iconMail from "../../../../../assets/img/icons/mail.png";
import iconInsta from "../../../../../assets/img/icons/instagram.png";
import iconPhone from "../../../../../assets/img/icons/phone.png";
import iconLinkedIn from "../../../../../assets/img/icons/linkedin.png";
import imageUser from "../.././../../../assets/img/profile-img/user-noimage.png";
import Input from "../../../../../component/base/Input";
import Button from "../../../../../component/base/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecruiterProfile,
  updateRecruiterProfile,
  updateRecruiterUser,
} from "../../../../../configs/redux/action/recruiterAction";
import { createAssetProfile } from "../../../../../configs/redux/action/assetActions";

const EditCompany = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.recruiter);

  const getProfile = () => {
    dispatch(getRecruiterProfile());
  };

  const handleUpdateProfile = () => {
    dispatch(updateRecruiterProfile(user));
  };

  const handleChange = (e) => {
    const changeUser = {
      ...user,
      [e.target.name]: e.target.value,
    };
    dispatch(updateRecruiterUser(changeUser));
  };

  const handleFileSelect = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    dispatch(createAssetProfile(file, user));
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
                  alt={user.company}
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
                {user.company}
              </h1>
              <h2 className="font-normal text-sm mt-[10px] text-hirejob-dark">
                {user.position}
              </h2>
              {user.city && (
                <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm mt-[13px] text-hirejob-gray">
                  <img className=" w-4 h-auto" src={iconMap} />
                  <span>{user.city}</span>
                </div>
              )}
              <p className=" my-[18px] font-normal text-sm leading-6 text-hirejob-gray">
                {user.description}
              </p>

              <div className="my-9 flex flex-col justify-center items-start gap-6">
                {user.email && (
                  <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                    <img src={iconMail} />
                    <span>{user.email} </span>
                  </div>
                )}
                {user.instagram && (
                  <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                    <img src={iconInsta} />
                    <span>{user.instagram}</span>
                  </div>
                )}
                {user.phone && (
                  <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                    <img src={iconPhone} />
                    <span>{user.phone} </span>
                  </div>
                )}
                {user.linkedin && (
                  <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray h-6">
                    <img src={iconLinkedIn} />
                    <span>{user.linkedin}</span>
                  </div>
                )}
              </div>
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
                <h1>Company Information</h1>
              </div>
              <div className="py-4 px-9">
                <Input
                  label={`Company Name`}
                  name={`company`}
                  value={user.company}
                  onChange={handleChange}
                  placeholder={`Company name`}
                />
                <Input
                  label={`Position`}
                  name={`position`}
                  value={user.position}
                  onChange={handleChange}
                  placeholder={`Position`}
                />
                <Input
                  label={`City`}
                  name={`city`}
                  value={user.city}
                  onChange={handleChange}
                  placeholder={`City`}
                />
                <Input
                  label={`Description`}
                  type={`textarea`}
                  name={`description`}
                  rows={`6`}
                  placeholder={`Tell us about your company in a few words`}
                  value={user.description}
                  onChange={handleChange}
                />
                <Input
                  label={`Email`}
                  type="email"
                  name={`email`}
                  value={user.email}
                  onChange={handleChange}
                  placeholder={`Email`}
                />
                <Input
                  label={`Instagram`}
                  name={`instagram`}
                  value={user.instagram}
                  onChange={handleChange}
                  placeholder={`Instagram`}
                />
                <Input
                  label={`Phone Number`}
                  name={`phone`}
                  value={user.phone}
                  onChange={handleChange}
                  placeholder={`Phone`}
                />
                <Input
                  label={`LinkedIn`}
                  name={`linkedin`}
                  value={user.linkedin}
                  onChange={handleChange}
                  placeholder={`LinkedIn`}
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
          </div>
        </div>
      </main>
    </>
  );
};

export default EditCompany;
