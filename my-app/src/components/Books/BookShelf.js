import classes from './BookShelf.module.css'
import Book from './Book';
import { useContext } from 'react';
import MyReadsContext from '../../Store/MyReadsContext';
const BookShelf = props =>{
  const {books} = useContext(MyReadsContext)
  const shelfBooks =  books.filter(
    (book) => book.shelf === props.type
  );
  const shelfBooksContent = shelfBooks.map((book) => (
    <Book key ={book.id} book={book} />
  ));
    return (
      <div className={classes["bookshelf"]}>
        <h2 className={classes["bookshelf-title"]}>{props.type}</h2>
        <div className={classes["bookshelf-books"]}>
          <ol className={classes["books-grid"]}>
            {shelfBooksContent}
          </ol>
        </div>
      </div>
    );
}
export default BookShelf