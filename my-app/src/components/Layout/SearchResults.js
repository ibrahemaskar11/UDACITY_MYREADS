import Book from "../Books/Book";
import classes from "./SearchResults.module.css";
const SearchResults = (props) => {
  const searchResultsContent = (
    <ol className={classes["books-grid"]}>
      {props.searchResults.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ol>
  );
  return (
    <div className={classes["search-books-results"]}>
      {props.error && <p className={classes.error}>{props.error}</p>}
      {!props.error && searchResultsContent}
    </div>
  );
};
export default SearchResults;
