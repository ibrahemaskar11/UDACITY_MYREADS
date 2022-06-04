import classes from './Book.module.css'
const Book = props =>{
    const authors = props.authors? props.authors.join(',\n') : 'UNKOWN'

    return (
      <li>
        <div className={classes["book"]}>
          <div className={classes["book-top"]}>
            <div
              className={classes["book-cover"]}
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  `url(${props.image})`,
              }}
            ></div>
            <div className={classes["book-shelf-changer"]}>
              <select>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className={classes["book-title"]}>{props.title}</div>
          <div className={classes["book-authors"]}>{authors}</div>
        </div>
      </li>
    );
}
export default Book