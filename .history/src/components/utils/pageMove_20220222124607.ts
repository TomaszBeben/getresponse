export const pageForward = () => {
    page >= totalPages
      ? setPage(1)
      : setPage(page => page + 1)
  }

export  const pageBackward = (setPage) => {
    page <= 1
      ? setPage(totalPages)
      : setPage(page => page - 1)
  }