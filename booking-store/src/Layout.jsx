import HandleBooksApi from "./Components/Books/HandleApi";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { BooksProvider } from "./Contexts/BooksContext";
function Layout() {
  const booksData = HandleBooksApi()
  return (
    <>
      <Header />
      <BooksProvider data={booksData}>
      <Outlet />
      </BooksProvider>
    </>
  );
}

export default Layout;
