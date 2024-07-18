export const currentMonthYear = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 7);
  return formattedDate;
};

export const convertToHttps = (url) => {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
};

export const calculatePaginationNumbers = (params, totalPage) => {
  const paginationNumbers = [];
  const maxPagesToShow = 3;

  let startPage = Math.max(1, params.page - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPage, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let page = startPage; page <= endPage; page++) {
    paginationNumbers.push(page);
  }

  return paginationNumbers;
};
