import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();
//   const BookData = fetchBookData(id)
  return (
    <div>
      <h1>Book Details</h1>
      <h1>book id: {id}</h1>
    </div>
  );
}

export default BookDetail;
