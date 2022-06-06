/*
-SearchResults component is used to render the search results
-SearchResults component either renders a list of search results or it renders the search error(No Books Found) 
*/
import { useContext } from "react";
import MyReadsContext from "../../Store/MyReadsContext";
import Book from "../Books/Book";
import classes from "./SearchResults.module.css";
const SearchResults = (props) => {
  const { books } = useContext(MyReadsContext);
  //if the book already exists in books in MyReadsContext then that book in the searchResults should be swapped with the object in the context to include the value of the book
  const modifiedSearchResults = props.searchResults.map((book) => {
    let withinShelf;
    books.forEach((el) => {
      if (el.id === book.id) {
        withinShelf = el;
        return;
      }
    });
    return withinShelf ? withinShelf : book;
  });
  //the searchResults passed by the component props is to be mapped into an unordered list of books each with its own unique key
  const searchResultsContent = (
    <ol className={classes["books-grid"]}>
      {modifiedSearchResults.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ol>
  );
  return (
    <div className={classes["search-books-results"]}>
      {/*
        -if the props.error is truthy an error is rendered to the user
        -else the search results is to be displayed
      */}
      {props.error && <p className={classes.error}>{props.error}</p>}
      {!props.error && searchResultsContent}
    </div>
  );
};
export default SearchResults;
