import classes from './BookShelf.module.css'
import Book from './Book';
const BookShelf = props =>{

  const shelfBooks = props.books.map((book) => (
    <Book key={book.id} title={book.title} image={book.imageLinks?.thumbnail} authors={book.authors}/>
  ));
    return (
      <div className={classes["bookshelf"]}>
        <h2 className={classes["bookshelf-title"]}>{props.type}</h2>
        <div className={classes["bookshelf-books"]}>
          <ol className={classes["books-grid"]}>
            {shelfBooks}
          </ol>
        </div>
      </div>
    );
}
export default BookShelf