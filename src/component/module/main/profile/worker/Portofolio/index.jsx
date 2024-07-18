import React, { useState } from "react";
import Input from "../../../../../base/Input";
import Button from "../../../../../base/Button";
import iconUpload from "../../../../../../assets/img/icons/cloud.png";
import iconRules1 from "../../../../../../assets/img/icons/high-res-img-rules.png";
import iconRules2 from "../../../../../../assets/img/icons/size-img-rules.png";
import { useDispatch } from "react-redux";
import {
  createPortofolio,
  deletePortofolio,
  readPortofolio,
  updatePortofolio,
} from "../../../../../../configs/redux/action/portofolioAction";
import { createAsset } from "../../../../../../configs/redux/action/assetActions";

const Portofolio = ({ myPortofolio }) => {
  const dispatch = useDispatch();

  const [portofolio, setPortofolio] = useState({
    application_name: "",
    link_repository: "",
    application: "Aplikasi Mobile",
    image: "",
    imagePreview: "", // Added for image preview
  });

  const handleAddPortofolio = () => {
    dispatch(createPortofolio(portofolio, setPortofolio));
  };

  const handleGetPortofolio = (id) => {
    dispatch(readPortofolio(id, setPortofolio));
  };

  const handleUpdatePortofolio = (id) => {
    dispatch(updatePortofolio(id, portofolio, setPortofolio));
  };

  const handleDeletePortofolio = (id) => {
    dispatch(deletePortofolio(id));
  };

  const handleChange = (e) => {
    setPortofolio({
      ...portofolio,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPortofolio({
          ...portofolio,
          image: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dataTransfer = e.dataTransfer;

    if (dataTransfer.items) {
      for (let i = 0; i < dataTransfer.items.length; i++) {
        if (dataTransfer.items[i].kind === "file") {
          const file = dataTransfer.items[i].getAsFile();
          if (!dataTransfer.types.includes("text/uri-list")) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setPortofolio({
                ...portofolio,
                image: file,
                imagePreview: reader.result,
              });
            };
            reader.readAsDataURL(file);
          }
        }
      }
    }

    if (dataTransfer.types.includes("text/uri-list")) {
      const url = dataTransfer.getData("text/plain");
      setPortofolio({
        ...portofolio,
        image: url,
        imagePreview: url,
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full rounded-lg py-4 bg-hirejob-white shadow-md">
      <div className="font-semibold text-[22px] border-b border-[#C4C4C4] px-9 py-[18px] text-hirejob-dark">
        <h1>Portofolio</h1>
      </div>
      <div className="py-4 px-9">
        <Input
          label="Application Name"
          name="application_name"
          placeholder="Enter your application name"
          value={portofolio.application_name}
          onChange={handleChange}
        />
        <Input
          label="Link Repository"
          name="link_repository"
          placeholder="Enter your link repository"
          value={portofolio.link_repository}
          onChange={handleChange}
        />
        <div className="flex flex-col flex-nowrap py-4">
          <span className="font-normal text-xs text-hirejob-gray mb-1">
            Application Category
          </span>
          <div className="flex flex-wrap items-center justify-start gap-1">
            <div
              className={`flex items-center justify-center gap-3 p-[15.5px] ${
                portofolio.application === "Aplikasi Mobile" && `border`
              } border-hirejob-frost rounded h-[50px]`}
            >
              <input
                className="checked:accent-hirejob-purple-normal"
                type="radio"
                name="application"
                value="Aplikasi Mobile"
                checked={portofolio.application === "Aplikasi Mobile"}
                onChange={handleChange}
              />
              <span
                className={`text-sm ${
                  portofolio.application === "Aplikasi Mobile"
                    ? `font-semibold text-hirejob-slate`
                    : `font-normal text-hirejob-gray`
                }`}
              >
                Mobile Application
              </span>
            </div>
            <div
              className={`flex items-center justify-center gap-3 p-[15.5px] ${
                portofolio.application === "Aplikasi Web" && `border `
              } border-hirejob-frost rounded h-[50px]`}
            >
              <input
                className="checked:accent-hirejob-purple-normal"
                type="radio"
                name="application"
                value="Aplikasi Web"
                checked={portofolio.application === "Aplikasi Web"}
                onChange={handleChange}
              />
              <span
                className={`text-sm ${
                  portofolio.application === "Aplikasi Web"
                    ? `font-semibold text-hirejob-slate`
                    : `font-normal text-hirejob-gray`
                }`}
              >
                Web Application
              </span>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-8 flex flex-col gap-1 text-hirejob-gray">
          <span className="font-normal text-xs">Image Upload</span>
          <label
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            htmlFor="file-upload"
            className="border border-hirejob-gray border-dashed inline-block w-full mt-3 pt-[41px] pb-[72px] cursor-pointer"
          >
            <div className="text-hirejob-dark flex flex-nowrap flex-col align-center justify-center">
              <div className="flex align-center justify-center">
                <img className="max-w-[114px]" src={iconUpload} />
              </div>
              {!portofolio.imagePreview && (
                <>
                  <span className="px-5 xl:px-0 flex items-center justify-center text-sm text-center">
                    Drag & Drop to Upload{" "}
                    {portofolio.application === "Aplikasi Mobile"
                      ? `Mobile Application`
                      : `Web Application`}{" "}
                    Image
                  </span>
                  <span className="px-5 md:px-0 flex items-center justify-center text-xs text-center mt-3">
                    or browse to upload files from your directory.
                  </span>
                </>
              )}
              {portofolio.imagePreview && (
                <div className="px-10 xl:px-0 flex items-center justify-center text-base text-center mt-3">
                  <img
                    src={portofolio.imagePreview}
                    alt="Preview"
                    className="max-w-[200px] max-h-[200px] object-cover"
                  />
                </div>
              )}
              <div className="hidden md:flex flex-col md:flex-row align-center justify-center mt-9 gap-[29px] md:gap-[58px]">
                <img className="px-20 md:px-0 md:h-5 xl:h-8" src={iconRules1} />
                <img className="px-20 md:px-0 md:h-5 xl:h-8" src={iconRules2} />
              </div>
            </div>
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <div
          className={`pt-12 border-t ${
            myPortofolio && `pb-12 border-b`
          } border-hirejob-frost`}
        >
          <Button
            onClick={handleAddPortofolio}
            colorButton="secondary"
            isBorder={true}
            isOutline={true}
            extra="p-[13.5px]"
          >
            Add Portofolio
          </Button>
        </div>
        {myPortofolio && (
          <ul className="pt-8 pb-4 mt-[10px] flex flex-row justify-center md:justify-start flex-wrap text-hirejob-white">
            {myPortofolio.map((porfol) => (
              <li
                key={porfol.id}
                className="w-full lg:w-auto text-center lg:text-left px-4 py-1 my-[10px] mr-[10px] border rounded  border-hirejob-yellow-normal"
              >
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={() => handleGetPortofolio(porfol.id)}
                >
                  {porfol.application_name && (
                    <p className="font-semibold text-[22px]">
                      {porfol.application_name}
                    </p>
                  )}
                  {porfol.image && (
                    <img
                      src={porfol.image}
                      alt="Portofolio"
                      className="w-full h-auto mt-2"
                    />
                  )}
                  {porfol.link_repository && (
                    <a
                      href={porfol.link_repository}
                      target="_blank"
                      className="font-semibold text-xs underline"
                    >
                      Repository Link
                    </a>
                  )}
                </div>
                <div className="flex flex-nowrap justify-end flex-row mt-3 gap-3 text-hirejob-dark">
                  <span
                    className="font-semibold  text-xl cursor-pointer text-red-600"
                    onClick={() => handleDeletePortofolio(porfol.id)}
                  >
                    Delete
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Portofolio;
