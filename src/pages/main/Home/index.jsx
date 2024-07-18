import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getWorkers,
  sortWorkers,
  searchWorker,
  prevPagination,
  nextPagination,
  resetWorkers,
  selectPagination,
} from "../../../configs/redux/action/workerAction";
import styleLoad from "../../../styles/components/loading.module.css";
import iconSearch from "../../../assets/img/icons/search.png";
import arrowDown from "../../../assets/img/icons/chevron-alt.png";
import CardUser from "../../../component/module/main/home/CardUser";
import Button from "../../../component/base/Button";
import Input from "../../../component/base/Input";
import Pagination from "../../../component/module/main/home/Pagination";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [popoverVisible, setPopoverVisible] = useState(false);
  const { role } = useSelector((state) => state.checkRole);
  const { data, params, totalPage, loading, response } = useSelector(
    (state) => state.main
  );

  const getSortNameWorkers = () => {
    setPopoverVisible(false);
    dispatch(sortWorkers("name", "ASC"));
  };

  const getSortLocationWorkers = () => {
    setPopoverVisible(false);
    dispatch(sortWorkers("domicile", "ASC"));
  };

  const handleNavigate = (id) => {
    dispatch(resetWorkers());
    navigate(`/main/profile/${id}`);
  };

  const handleSearch = (e) => {
    const word = e.target.value;
    setSearchValue(word);
  };

  const submitSearch = () => {
    dispatch(searchWorker(searchValue));
  };

  const togglePopover = () => {
    setPopoverVisible((prev) => !prev);
  };

  const handlePrev = () => {
    if (params.page > 1) {
      dispatch(prevPagination());
    }
  };

  const handleNext = () => {
    if (params.page < totalPage) {
      dispatch(nextPagination());
    }
  };

  const handleSelectPage = (pageNumber) => {
    dispatch(selectPagination(pageNumber));
  };

  useEffect(() => {
    dispatch(getWorkers(params));
  }, [params]);

  return (
    <div>
      <header className="px-4 md:px-16 lg:px-[150px] py-[30px] bg-hirejob-purple-normal text-hirejob-white">
        <h1 className="text-center md:text-left font-bold text-[28px]">
          Top Jobs
        </h1>
      </header>

      <main className="bg-hirejob-light">
        <div className="px-4 md:px-16 lg:px-[150px] pt-[50px] pb-[70px]">
          <div className="w-full h-auto md:h-[70px] rounded-lg p-2 flex flex-col md:flex-row justify-between items-center shadow-sm bg-hirejob-white">
            <div className="w-full md:w-2/3 xl:w-4/5 h-full p-3 flex justify-between items-center border-b md:border-b-0 md:border-r border-hirejob-gray">
              <Input
                className="w-full h-full rounded font-['Open Sans'] text-sm text-hirejob-gray"
                type="text"
                name="search"
                value={searchValue}
                placeholder="Search for worker"
                onChange={handleSearch}
              />
              {!loading.search ? (
                <img className="w-auto h-auto" src={iconSearch} />
              ) : (
                <div className={`${styleLoad.loaderSpinningl3}`}></div>
              )}
            </div>
            <div className="w-full md:w-1/3 xl:w-1/5 h-full flex justify-between items-center mt-3 md:mt-0 relative">
              <span
                className={`w-1/2 font-semibold text-base p-[15px] text-hirejob-gray cursor-pointer`}
                onClick={togglePopover}
              >
                Sort
              </span>
              {popoverVisible && (
                <div className="block absolute w-full top-14 bg-hirejob-white border border-hirejob-frost rounded-md shadow-lg">
                  <div
                    onClick={getSortNameWorkers}
                    className="w-full p-[25px] border-y border-hirejob-ice cursor-pointer"
                  >
                    <span className="font-normal text-sm text-hirejob-dark">
                      Sort by Name
                    </span>
                  </div>
                  <div
                    onClick={getSortLocationWorkers}
                    className="w-full p-[25px] border-y border-hirejob-ice cursor-pointer"
                  >
                    <span className="font-normal text-sm text-hirejob-dark">
                      Sort by Location
                    </span>
                  </div>
                </div>
              )}
              <div className="w-1/2">
                <Button
                  size={`font-semibold`}
                  colorButton={`primary`}
                  extra={`p-[15px]`}
                  onClick={submitSearch}
                  isDisabled={loading.data}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          {loading.data ? (
            <section className="w-full rounded-lg my-[100px]">
              <div className="flex justify-center items-center gap-5">
                <div className={styleLoad.loaderSpinningl1}></div>
                <h1 className="font-semibold text-2xl text-hirejob-purple-normal">
                  Please Wait
                </h1>
              </div>
            </section>
          ) : (
            <section className="w-full rounded-lg mt-[60px] mb-[100px] shadow-md bg-hirejob-white">
              {data.length > 0 ? (
                data.map((worker) => (
                  <CardUser
                    key={worker.id}
                    onClick={() => handleNavigate(worker.id)}
                    image={worker.photo}
                    name={worker.name}
                    job_desc={worker.job_desc}
                    domicile={worker.domicile}
                    skills={worker.skills}
                    showHireButton={role === "recruiter"} // Using role to show/hide button
                    userId={worker.id}
                    navigate={navigate}
                  />
                ))
              ) : (
                <div className="flex justify-center items-center gap-5 py-20">
                  <h1 className="font-semibold text-2xl">
                    Not Found Any Worker!
                  </h1>
                </div>
              )}
            </section>
          )}

          <Pagination
            params={params}
            totalPage={totalPage}
            handleSelectPage={handleSelectPage}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
