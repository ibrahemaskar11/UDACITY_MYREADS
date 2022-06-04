import BookShelf from "../Books/BookShelf";
import classes from "./Home.module.css";
import { useState, useEffect, useContext, useMemo } from "react";
import MyReadsContext from "../../Store/MyReadsContext";
import CircularLoading from "../UI/CircularLoading";

const Home = (props) => {
  const { getMyBooks } = useContext(MyReadsContext);
  const { books } = useContext(MyReadsContext);
  const { isLoading } = useContext(MyReadsContext);
  console.log(isLoading);
  useEffect(() => { 
    getMyBooks();
  }, []);
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");
  let pageContent = isLoading ? (
    <CircularLoading panner="Loading" />
  ) : (
    <div className={classes["page-content"]}>
      <div className={classes["list-books-content"]}>
        <div>
          <BookShelf type='currentlyReading' title="Currently Reading" books={currentlyReading} />
          <BookShelf type='wantToRead' title="Want to Read" books={wantToRead} />
          <BookShelf type='read' title="Read" books={read} />
        </div>
      </div>
      <div className={classes["open-search"]}>
        <button onClick={props.onShowSearch}>Add a book</button>
      </div>
    </div>
  );
  return (
        <>
          <div className={classes["list-books-title"]}>
            <h1>MyReads</h1>
          </div>
          {pageContent}
        </>
  );
};
export default Home;
