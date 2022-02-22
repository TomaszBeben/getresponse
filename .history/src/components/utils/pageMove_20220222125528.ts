export const pageForward = (setPage: (arg: number | any ) => void, page: number, totalPages: number) => {
    page >= totalPages
      ? setPage(1)
      : setPage(page => page + 1)
  }

export  const pageBackward = (setPage: (arg: number | any) => void, page: number, totalPages: number) => {
    page <= 1
      ? setPage(totalPages)
      : setPage(page => page - 1)
  }