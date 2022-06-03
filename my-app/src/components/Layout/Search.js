import { useState } from 'react';
import classes from './Search.module.css'
const Search = props =>{
    const [showSearchPage, setShowSearchPage] = useState(false);
    const closeSearchPageHandler = () =>{
        setShowSearchPage(false)
    }
    return (
      <div className={classes["search-books"]}>
        <div className={classes["search-books-bar"]}>
          <button
            className={classes["close-search"]}
            onClick={closeSearchPageHandler}
          >
            Close
          </button>
          <div className={classes["search-books-input-wrapper"]}>
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className={classes["search-books-results"]}>
          <ol className={classes["books-grid"]}></ol>
        </div>
      </div>
    );
}
export default Search