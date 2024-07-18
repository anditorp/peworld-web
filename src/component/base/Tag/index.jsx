import React from "react";

const Tag = ({ children, deleteClick }) => {
  return (
    <>
      <li className="px-4 py-1 my-[10px] mr-[10px] border rounded bg-[#fbb01799] border-hirejob-yellow-normal">
        {children}
        {deleteClick && (
          <button
            className="px-[5px] relative -right-3 rounded bg-hirejob-white text-hirejob-yellow-normal hover:bg-hirejob-yellow-normal hover:text-hirejob-white transition duration-200"
            onClick={deleteClick}
          >
            X
          </button>
        )}
      </li>
    </>
  );
};

export default Tag;
