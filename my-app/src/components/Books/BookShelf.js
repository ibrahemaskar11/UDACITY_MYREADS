/*
-BookShelf component is used to render the book shelves in the home screen
*/
import classes from "./BookShelf.module.css";
import Book from "./Book";
import { useContext } from "react";
import MyReadsContext from "../../Store/MyReadsContext";
const BookShelf = (props) => {
  //books are imported from MyReadsContext to be later filtered using the type prop
  //shelfBooks is a list that contains the books which matches the type of the bookShelf
  const { books } = useContext(MyReadsContext);
  const shelfBooks = books.filter((book) => book.shelf === props.type);
  //shelfBooks is then mapped to initialize shelfBooksContent which would be then rendered as a
  //shelfBooksContent is an unordered list of Book components each has its own key
  const shelfBooksContent = shelfBooks.map((book) => (
      <Book key={book.id} book={book} />
  ));
  return (
    <div className={classes["bookshelf"]}>
      <h2 className={classes["bookshelf-title"]}>{props.type}</h2>
      <div className={classes["bookshelf-books"]}>
        <ol className={classes["books-grid"]}>{shelfBooksContent} </ol>
      </div>
    </div>
  );
};
export default BookShelf;
