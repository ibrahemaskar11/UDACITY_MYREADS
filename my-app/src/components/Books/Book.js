import classes from "./Book.module.css";
import { useState, useContext } from "react";
import { update } from "../../BooksAPI";
import MyReadsContext from "../../Store/MyReadsContext";
const Book = (props) => {
  const { book } = props;
  const [bookValue, setBookValue] = useState(book.shelf);
  const {getMyBooks} = useContext(MyReadsContext)
  const authors = book.authors ? book.authors.join(",\n") : "UNKOWN";
  const bookOptions = [
    { id: 0, text: "Currently Reading", value: "currentlyReading" },
    { id: 1, text: "Want to Read", value: "wantToRead" },
    { id: 2, text: "Read", value: "read" },
    { id: 3, text: "none", value: "None" },
  ];
  const updateBookShelf = async (val) => {
    await update(book, val);
  };
  const changeBookShelfHandler = async (e) => {
    setBookValue(e.target.value);
    await updateBookShelf(e.target.value);
    getMyBooks()
  };
  return (
    <li>
      <div className={classes["book"]}>
        <div className={classes["book-top"]}>
          <div
            className={classes["book-cover"]}
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className={classes["book-shelf-changer"]}>
            <select onChange={changeBookShelfHandler} value={bookValue}>
              <option value="move" disabled>
                Move to...
              </option>
              {bookOptions.map((book) => (
                <option key={book.id} value={book.value}>
                  {book.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={classes["book-title"]}>{book.title}</div>
        <div className={classes["book-authors"]}>{authors}</div>
      </div>
    </li>
  );
};
export default Book;
