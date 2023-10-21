import { Link } from "react-router-dom";
import { useBooksContext } from "../../Contexts/BooksContext";
import { useState, useEffect } from "react";

function Books() {
  const data = useBooksContext();
  // console.log("data--->", data);
  const [booksData, setBooksData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (data instanceof Promise) {
      data.then((resolvedData) => {
        setBooksData(resolvedData || []);
      });
    } else if (data && data) {
      setBooksData(data);
    }
  }, [data]);

  const filteredBooks = booksData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
    <div>
    <div className="flex grow my-3 justify-center">
      <input
        className="flex h-10 w-[650px] rounded-md bg-white border-black border-2 mx-4 px-3 py-2 text-sm placeholder:text-gray-900 focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed"
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange} //
        placeholder="Search Books Here..."
      />
    </div>
    </div>
      <div className="flex justify-evenly flex-wrap gap-4 mx-6 my-4">
        {filteredBooks?.map((item, id) => (
          <div className="w-[300px] rounded-md border" key={id}>
            <img
              src={item?.image_url}
              alt="Laptop"
              className="h-[280px] w-full"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {item?.title}
              </h1>
              <p className="mt-3 text-base text-gray-600">
                <span className="font-semibold">Author:</span> {item?.authors}
              </p>
              <p className="text-sm pt-2">{item?.Quote1}</p>
              <p className="mt-3 text-base text-gray-600">
                <span className="font-semibold">Ratings:</span> {item?.rating}/5
              </p>
              <Link to={`/bookDetail/${id}`} state={{ book: item }}>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Read
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Books;
