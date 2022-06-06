/*
-Book component is used to render books
*/
import classes from "./Book.module.css";
import { useState, useContext, useEffect } from "react";
import MyReadsContext from "../../Store/MyReadsContext";
const Book = (props) => {
  const { book } = props;
  const [bookValue, setBookValue] = useState(book.shelf ? book.shelf : null);
  const { updateMyBooks, books } = useContext(MyReadsContext);
  //isFound would be later used to identify if the book already exists in the context or not
  const isFound = books.some((el) => el.id === book.id);

  //authors constant is initialized to the book.authors if it exists each joined by a ',' or to UNKONWN if it doesn't(would result in error if not specified)
  const authors = book.authors ? book.authors.join(",\n") : "UNKOWN";
  const bookImage = book.imageLinks?.thumbnail;
  //bookOptions list is used to initialize the select menu later on
  const bookOptions = [
    { id: 0, text: "Currently Reading", value: "currentlyReading" },
    { id: 2, text: "Read", value: "read" },
    { id: 1, text: "Want to Read", value: "wantToRead" },
    { id: 3, text: "none", value: "None" },
  ];
  //changeBookShelfHandler is used to set the book value with each change to the select menu
  //ChangeBookShelfHandler is used to call the updateMyBooks function which is imported from MyReadsContext whenever the bookValue changes or whenever the book is to be moved among the shelves
  const changeBookShelfHandler = async (e) => {
    setBookValue(e.target.value);
    updateMyBooks(book, e.target.value);
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
              backgroundImage: `url(${bookImage})`,
            }}
          ></div>
          <div className={classes["book-shelf-changer"]}>
            <select
              onChange={changeBookShelfHandler}
              defaultValue={bookValue ? bookValue : "None"}
            >
              <option value="move" disabled>
                {isFound ? "Move to..." : "Add to..."}
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
