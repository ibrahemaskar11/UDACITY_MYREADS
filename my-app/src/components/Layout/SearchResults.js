import Book from "../Books/Book";
import classes from './SearchResults.module.css'
const SearchResults = (props) => {
    if(props.searchResults.length === 0) {console.log('zero');}
  const searchResultsContent = props.searchResults.map((book) => (
      <Book
        key={book.id}
        title={book.title}
        image={book.imageLinks?.thumbnail}
        authors={book.authors}
      />
  ));
  return (
    <div className={classes["search-books-results"]}>
      <ol className={classes["books-grid"]}>{searchResultsContent}</ol>
    </div>
  );
};
export default SearchResults;
