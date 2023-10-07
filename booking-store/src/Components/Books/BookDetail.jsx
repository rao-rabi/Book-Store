// import { useParams } from "react-router-dom";

// function BookDetail() {
//   const { id } = useParams();

// //   const BookData = fetchBookData(id)
//   return (
//     <div>
//       <h1>Book Details</h1>
//       <h1>book id: {id}</h1>
//     </div>
//   );
// }

// export default BookDetail;

import { useLocation } from "react-router-dom";

function BookDetail() {
  const location = useLocation();
  const book = location.state?.book;

  if (!book) {
    return <div>Book details not available.</div>;
  }

  return (
    <div className="flex mt-5 gap-9 mx-36">
      <div className="h-96">
        <img
          src={book?.image_url}
          alt="Laptop"
          className=" rounded-md h-96 w-[2000px]"
        />
      </div>
      <div className="flex justify-start flex-col">
      <h1 className="font-bold text-3xl">{book?.title}</h1>
      <h1 className="text-lg pt-2"><span className="font-bold text-xl">Author: </span>{book?.authors}</h1>
      <h2 className="font-bold text-2xl pt-2">Description:</h2>
      <p className="text-lg">{book?.description}</p>
      <h1 className="text-lg pt-2"><span className="font-bold text-xl">Total Pages: </span>{book?.num_pages}</h1>
      <h1 className="text-lg pt-2"><span className="font-bold text-xl">Ratings: </span>{book?.rating}/5</h1>
      <h1 className="text-lg pt-2"><span className="font-bold text-xl">Quote: </span>{book?.Quote2}</h1>
      </div>
    </div>
  );
}

export default BookDetail;
