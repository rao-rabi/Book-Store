import { Link } from "react-router-dom";
import { useBooksContext } from "../../Contexts/BooksContext";
import { useState, useEffect } from "react";

function Books() {
  const data = useBooksContext();
  // console.log("data--->", data);
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    if (data instanceof Promise) {
      data.then((resolvedData) => {
        setBooksData(resolvedData || []);
      });
    } else if (data && data) {
      setBooksData(data);
    }
  }, [data]);

  return (
    <>
      <div className="flex justify-evenly flex-wrap gap-4 mx-6 my-4">
        {booksData?.map((item, id) => (
          <div className="w-[300px] rounded-md border" key={id}>
            <img
              src={item?.image_url}
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
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
