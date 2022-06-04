import { useCallback, useState } from "react";
import MyReadsContext from "./MyReadsContext";
import { getAll as getAllBooks } from "../BooksAPI";
import { update } from "../BooksAPI";
const MyReadsProvider = (props) => {
  const [myBooks, setMyBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMyBooks = async () => {
    setIsLoading(true);
    const res = await getAllBooks();
    setMyBooks(res);
    setIsLoading(false);
    console.log(res);
  };
  const updateMyBooks = async (book, shelf) => {
    await update(book, shelf);
  };

  const MyReads = {
    books: myBooks,
    isLoading: isLoading,
    getMyBooks,
    updateMyBooks,
  };
  return (
    <MyReadsContext.Provider value={MyReads}>
      {props.children}
    </MyReadsContext.Provider>
  );
};
export default MyReadsProvider;
