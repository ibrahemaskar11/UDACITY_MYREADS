import BookShelf from "../Books/BookShelf";
import classes from "./Home.module.css";
import { useState, useEffect, useContext } from "react";
import MyReadsContext from "../../Store/MyReadsContext";
const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { getMyBooks } = useContext(MyReadsContext);
  const { books } = useContext(MyReadsContext);
  useEffect(() => {
    getMyBooks();
    setIsLoading(false);
  }, []);
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");
  return (
    <div>
      <div className={classes["list-books"]}>
        <div className={classes["list-books-title"]}>
          <h1>MyReads</h1>
        </div>
        <div className={classes["list-books-content"]}>
          <div>
            <BookShelf type="Currently Reading" books={currentlyReading} />
            <BookShelf type="Want to Read" books={wantToRead} />
            <BookShelf type="Read" books={read} />
          </div>
        </div>
      </div>
      <div className={classes["open-search"]}>
        <button onClick={props.onShowSearch}>Add a book</button>
      </div>
    </div>
  );
};
export default Home;
