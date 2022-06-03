import BookShelf from "../Books/BookShelf";
import classes from "./Home.module.css";
const Home = (props) => {
  return (
    <div>
      <div className={classes["list-books"]}>
        <div className={classes["list-books-title"]}>
          <h1>MyReads</h1>
        </div>
        <div className={classes["list-books-content"]}>
          <div>
            <BookShelf type="Currently Reading" />
            <BookShelf type="Want to Read" />
            <BookShelf type="Read" />
          </div>
        </div>
      </div>
      <div className={classes["open-search"]}>
        <button>
          Add a book
        </button>
      </div>
    </div>
  );
};
export default Home;
