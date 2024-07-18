import React from "react";
import arrowIconLeft from "../../../../../assets/img/icons/prev.png";
import arrowIconRight from "../../../../../assets/img/icons/next.png";
import Button from "../../../../base/Button";
import { calculatePaginationNumbers } from "../../../../../utils/helper";

const Pagination = ({
  params,
  totalPage,
  handleSelectPage,
  handlePrev,
  handleNext,
}) => {
  if (totalPage == 0) {
    totalPage += 1;
  }
  const paginationNumbers = calculatePaginationNumbers(params, totalPage);

  return (
    <div className="w-full flex justify-center items-center gap-[14px]">
      <Button
        onClick={handlePrev}
        colorButton={`primary`}
        isOutline={true}
        isBorder={true}
        isWidthFull={false}
        extra={`w-[58px] h-[58px] flex justify-center items-center bg-hirejob-white border-hirejob-frost`}
      >
        <img src={arrowIconLeft} />
      </Button>
      <div className="flex justify-center items-center gap-[14px]">
        {/* {paginationNumbers} */}
        {paginationNumbers.map((numPage) => (
          <Button
            key={numPage}
            onClick={() => handleSelectPage(numPage)}
            colorButton={`primary`}
            isOutline={params.page === numPage ? false : true}
            isBorder={true}
            isWidthFull={false}
            isDisabled={params.page === numPage ? true : false}
            extra={`${
              params.page !== numPage && `font-normal hover:font-bold`
            } text-lg w-[58px] h-[58px] flex justify-center items-center bg-hirejob-white border-hirejob-frost`}
          >
            {numPage}
          </Button>
        ))}
      </div>
      <Button
        onClick={handleNext}
        colorButton={`primary`}
        isOutline={true}
        isBorder={true}
        isWidthFull={false}
        extra={`w-[58px] h-[58px] flex justify-center items-center bg-hirejob-white border-hirejob-frost`}
      >
        <img src={arrowIconRight} />
      </Button>
    </div>
  );
};

export default Pagination;
