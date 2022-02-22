export const pageForward = (setPage: (arg: number ) => void, page: number, totalPages: number) => {
    page >= totalPages
      ? setPage(1)
      : setPage(page => page + 1)
  }

export  const pageBackward = (setPage: (arg:  any ) => void, page: number, totalPages: number) => {
    page <= 1
      ? setPage(totalPages)
      : setPage(page => page - 1)
  }