/*
-MyReadsProvider components is made up maily for clean code purposes
-wrapping the context value with the the context provider in one component
*/
import { useState } from "react";
import MyReadsContext from "./MyReadsContext";
import { getAll as getAllBooks } from "../BooksAPI";
import { update } from "../BooksAPI";
const MyReadsProvider = (props) => {
  //myBooks state is used to hold the books array
  //myBooks state is to be updated with each operation on the books
  const [myBooks, setMyBooks] = useState([]);
  //isLoading state is used to record the website loading state
  const [isLoading, setIsLoading] = useState(true);
  //getMyBooks is an async function used to parse the books through the book api and assign the response to myBooks state
  //each time getMyBooks is called isLoading state is set to true and after the response is parsed the isLoading state is set to false
  const getMyBooks = async () => {
    setIsLoading(true);
    const res = await getAllBooks();
    setMyBooks(res);
    setIsLoading(false);
  };
  //updateMyBooks is used to move the books through out the different shelves updating the book values
  //after the book is updated getMyBooks function is called to update the myBooks state and to then update the home page
  const updateMyBooks = async (book, shelf) => {
    await update(book, shelf);
    getMyBooks();
  };
  //myReads object is used to hold the value of the context provider
  const MyReads = {
    books: myBooks,
    isLoading: isLoading,
    getMyBooks,
    updateMyBooks,
  };
  //{props.children} is used to include other react components under that provider as they are
  return (
    <MyReadsContext.Provider value={MyReads}>
      {props.children}
    </MyReadsContext.Provider>
  );
};
export default MyReadsProvider;
