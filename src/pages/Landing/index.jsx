import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { checkRole } from "../../configs/redux/action/checkRoleAction";
import { logout } from "../../configs/redux/action/authAction";
import style from "../../styles/pages/landing.module.css";
import imageLanding1 from "../../assets/img/landing-page-1.png";
import imageLanding2 from "../../assets/img/landing-page-2.png";
import imageLanding3 from "../../assets/img/landing-page-3.png";
import tickLogo1 from "../../assets/img/icons/tick_purple.png";
import tickLogo2 from "../../assets/img/icons/tick_yellow.png";
import NavbarLanding from "../../component/module/navbar/NavbarLanding";
import Footer from "../../component/module/Footer";
import Button from "../../component/base/Button";
import ReviewSlider from "../../component/module/landing/ReviewSlider";
import { user_reviews } from "../../utils/constants";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [popoverVisible, setPopoverVisible] = useState(false);
  const { isLogged } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.checkRole);

  const togglePopover = () => {
    setPopoverVisible((prev) => !prev);
  };

  const closePopover = () => {
    setPopoverVisible(false);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest("#popover-content") && popoverVisible) {
      closePopover();
    }
  };

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  useEffect(() => {
    dispatch(checkRole());
  }, []);

  return (
    <div onClick={handleOutsideClick}>
      <NavbarLanding
        auth={isLogged}
        role={role}
        popoverVisible={popoverVisible}
        togglePopover={togglePopover}
        handleLogout={handleLogout}
      />

      <main>
        <div className="container max-w-full px-4 md:px-16 lg:px-[150px] py-5">
          <section className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch justify-between gap-5">
            <div className="w-full lg:w-2/3 xl:w-[46%] lg:mt-8 xl:mt-32 text-center lg:text-left">
              <h1 className="font-semibold text-3xl xl:text-[44px] xl:leading-[70px] text-hirejob-dark">
                Find the best talent programmer across a wide range of skill
              </h1>
              <p className="font-normal text-lg mt-5 mb-5 md:mb-14 text-hirejob-slate">
                Welcoming the new era with top local talent presents a
                significant opportunity to be part of this transformative
                movement.
              </p>
              <NavLink to={isLogged ? `/main/home` : `/login`}>
                <Button
                  colorButton={`primary`}
                  isWidthFull={false}
                  extra={`px-6 py-[21.5px]`}
                >
                  Search Worker
                </Button>
              </NavLink>
            </div>
            <div className="w-5/6 md:w-4/5 lg:w-auto xl:w-[54%] hidden sm:block">
              <img
                className="w-full"
                src={imageLanding1}
                alt={`img-landing-page-1`}
              />
            </div>
          </section>
          <section className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-5 my-20">
            <div className="w-5/6 md:w-4/5 lg:w-auto xl:w-[45%] hidden sm:block">
              <img
                className="w-full"
                src={imageLanding2}
                alt={`img-landing-page-2`}
              />
            </div>
            <div className="w-full lg:w-1/2 xl:w-[55%] text-center lg:text-left xl:pr-24">
              <h2 className="font-semibold text-2xl md:text-3xl xl:text-4xl xl:leading-[56px] lg:my-6 2xl:my-10 text-hirejob-dark">
                Why Consider Peworld for Talent Acquisition?
              </h2>
              <div className="flex flex-wrap lg:block my-8 xl:my-10">
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[22px] w-full md:w-1/2 lg:w-auto my-3 sm:my-6 xl:my-8 font-normal text-base text-hirejob-slate">
                  <img src={tickLogo1} />
                  <span>Access exceptional local talent</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[22px] w-full md:w-1/2 lg:w-auto my-3 sm:my-6 xl:my-8 font-normal text-base text-hirejob-slate">
                  <img src={tickLogo1} />
                  <span>Broaden your choices</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[22px] w-full md:w-1/2 lg:w-auto my-3 sm:my-6 xl:my-8 font-normal text-base text-hirejob-slate">
                  <img src={tickLogo1} />
                  <span>Enhance collaboration opportunities</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[22px] w-full md:w-1/2 lg:w-auto my-3 sm:my-6 xl:my-8 font-normal text-base text-hirejob-slate">
                  <img src={tickLogo1} />
                  <span>Streamline the hiring process</span>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col-reverse xl:flex-row items-center xl:items-stretch justify-between gap-5 my-20">
            <div className="w-full md:w-4/5 xl:w-1/2 text-center xl:text-left xl:pl-16">
              <h2 className="font-semibold text-4xl xl:leading-[56px] lg:my-6 2xl:my-10 text-hirejob-dark">
                Skill Talent
              </h2>
              <p className="font-normal text-lg my-5 text-hirejob-slate">
                Peworld empowers skillful talents by providing a platform to
                showcase their abilities and expertise, connecting them with
                opportunities that match their skills.
              </p>
              <div className="w-full h-auto md:h-60 flex flex-col flex-wrap items-center xl:items-stretch gap-y-8 my-8 xl:my-10">
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>Java</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>Kotlin</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>PHP</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>Javascript</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>Golang</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>C++</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>Ruby</span>
                </div>
                <div className="w-5/6 md:w-2/5 xl:w-1/2 flex items-center gap-[22px] font-normal text-base text-hirejob-slate">
                  <img src={tickLogo2} />
                  <span>10+ Programming Language</span>
                </div>
              </div>
            </div>
            <div className="w-5/6 md:w-4/5 xl:w-1/2 hidden sm:block">
              <img
                className="w-full"
                src={imageLanding3}
                alt={`img-landing-page-3`}
              />
            </div>
          </section>
        </div>

        <ReviewSlider data={user_reviews} />

        <div className="container max-w-full p-4 md:p-16 lg:p-[150px]">
          <section className="flex items-center justify-center">
            <div
              className={`w-full flex flex-col md:flex-row items-center justify-between p-9 md:px-[68px] md:py-[57px] rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg text-hirejob-white ${style.bgBoxSpecial} hover:bg-repeat hover:bg-cover`}
            >
              <h1 className="font-semibold text-xl text-center md:text-left lg:text-2xl xl:text-4xl xl:leading-[56px] pb-10 md:pb-0 w-full md:w-[45%] 2xl:w-1/4">
                Discover Talent on Peworld Today.
              </h1>
              <NavLink to={isLogged ? `/main/home` : `/login`}>
                <Button
                  colorButton={`primary`}
                  isWidthFull={false}
                  isOutline={true}
                  isTransparent={true}
                  extra={`py-6 px-12`}
                >
                  Start Now!
                </Button>
              </NavLink>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
