/*
-SearchResults component is used to render the search results
-SearchResults component either renders a list of search results or it renders the search error(No Books Found) 
*/
import Book from "../Books/Book";
import classes from "./SearchResults.module.css";
const SearchResults = (props) => {
  
  //the searchResults passed by the component props is to be mapped into a list of books each with its own unique key
  const searchResultsContent = (
    <ol className={classes["books-grid"]}>
      {props.searchResults.map((book) => (
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
