import React, { useState } from "react";
import imageUser from "../../../../../assets/img/profile-img/user-noimage.png";
import iconMap from "../../../../../assets/img/icons/map.png";
import Tag from "../../../../base/Tag";
import Button from "../../../../base/Button";
import { useDispatch } from "react-redux";
import { createHire } from "../../../../../configs/redux/action/hireAction";
import styles from "../../../../../styles/components/CardUser.module.css";

const CardUser = ({
  image = null,
  name = "Unknown",
  job_desc = "Unknown",
  domicile = "Somewhere",
  skills = [],
  showHireButton = false,
  userId,
  navigate,
}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage(""); // Reset message when closing the modal
  };

  const handleHire = () => {
    const hireDetails = {
      message_purpose: message,
      name: name,
      email: "",
      phone: "",
      description: "",
    };

    dispatch(createHire(hireDetails, userId, navigate));
    closeModal(); // Close modal after hiring
  };

  return (
    <div className="w-full py-[21px] flex flex-wrap md:flex-nowrap justify-evenly gap-[11px] border-y-2 border-[#f2f3f4]">
      <div className="w-1/2 md:w-1/4 xl:w-1/6 2xl:w-1/12 flex justify-center items-center">
        <div className="w-[100px] h-[100px] overflow-hidden rounded-[50%]">
          <img
            className="w-full h-auto"
            src={image === null ? imageUser : image}
            alt={name || "Unknown"}
          />
        </div>
      </div>
      <div className="text-center md:text-left w-4/5 md:w-1/2 xl:w-2/3 2xl:w-2/3">
        <h1 className="font-semibold text-[22px] my-2 text-hirejob-dark">
          {name || "Unknown"}
        </h1>
        <h2 className="font-normal text-sm my-2 text-hirejob-gray">
          {job_desc || "Unknown"}
        </h2>
        <div className="flex justify-center md:justify-start items-center gap-[11px] font-normal text-sm text-hirejob-gray">
          <img className="w-4 h-auto" src={iconMap} />
          <span>{domicile || "Somewhere"}</span>
        </div>
        {skills.length ? (
          <ul className="font-semibold text-xs mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
            {skills.slice(0, 5).map((skill, i) => (
              <Tag key={i}>{skill.skill_name}</Tag>
            ))}
            {skills.length > 5 && <Tag>{`+${skills.length - 5}`}</Tag>}
          </ul>
        ) : (
          <div className="mt-[10px] h-[46px]"></div>
        )}
      </div>
      <div className="w-full md:w-1/3 xl:w-1/4 flex justify-center items-center">
        {showHireButton && (
          <Button colorButton="secondary" extra="py-[15px]" onClick={openModal}>
            Hire
          </Button>
        )}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Write Your Message</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={4}
            />
            <div>
              <Button onClick={handleHire}>Send</Button>
              <Button onClick={closeModal}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardUser;
