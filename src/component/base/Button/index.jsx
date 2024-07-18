import React from "react";
import style from "./../../../styles/components/button.module.css";

const Button = ({
  children,
  colorButton,
  onClick,
  weight = `font-bold`,
  size = `text-base`,
  radius = `rounded`,
  isWidthFull = true,
  isBorder = false,
  isOutline = false,
  isTransparent = false,
  extra,
  isDisabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${isWidthFull === true ? `w-full` : ``} ${weight} ${
        style.baseButton
      } ${size} ${radius} ${isBorder ? "border" : ``} ${extra} ${
        colorButton === "primary"
          ? isOutline
            ? style.primaryOutline
            : style.primaryColor
          : ""
      } ${
        colorButton === "secondary"
          ? isOutline
            ? style.secondaryOutline
            : style.secondaryColor
          : ""
      } ${isTransparent ? style.transparentOutlineHover : ""}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
