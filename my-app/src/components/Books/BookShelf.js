import classes from './BookShelf.module.css'
import Book from './Book';
const BookShelf = props =>{
    return (
      <div className={classes["bookshelf"]}>
        <h2 className={classes["bookshelf-title"]}>{props.type}</h2>
        <div className={classes["bookshelf-books"]}>
          <ol className={classes["books-grid"]}>
            <Book />
            <Book />
          </ol>
        </div>
      </div>
    );
}
export default BookShelf