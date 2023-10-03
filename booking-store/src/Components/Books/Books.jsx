import { Link, useLoaderData } from "react-router-dom";
function Books() {
  const data = useLoaderData();

  return (
    <div className="flex justify-evenly flex-wrap gap-4 mx-6 my-4">
      {data?.items?.map((item, id) => (
          <div className="w-[300px] rounded-md border" key={id}>
            <img
              src={item?.volumeInfo?.imageLinks?.thumbnail}
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {item?.volumeInfo?.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <Link to={`/bookDetail/${id}`}>
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
  );
}

export default Books;
