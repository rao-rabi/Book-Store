import BooksApi from "../../api/api";

const HandleBooksApi = async () => {
  const response = await fetch(BooksApi);
  return response.json();
  
};

export default HandleBooksApi;
