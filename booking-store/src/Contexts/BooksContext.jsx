import { createContext, useContext } from "react";

const BooksContext = createContext();

export const useBooksContext = () => {
  return useContext(BooksContext);
};

export const BooksProvider = ({ children, data }) => {
  return(
     <BooksContext.Provider value={data}>
        {children}
    </BooksContext.Provider>
    )
};
