import classes from "./Search.module.css";
import useDebounce from "../../hooks/useDebounce";
import { search } from "../../BooksAPI";
import { useCallback, useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import CircularLoading from "../UI/CircularLoading";
const Search = (props) => {
  const [enteredSearchTerm, setEnteredSearchTerm] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const debouncedSearchTerm = useDebounce(enteredSearchTerm, 300);

  const enteredSearchTermChangeHandler = (event) => {
    setEnteredSearchTerm(event.target.value);
  };
  const bookSearch = useCallback(async () => {
    setIsSearching(true);
    setError(null);
    if (debouncedSearchTerm.trim() === "") {
      setIsSearching(false);

      setSearchItems([]);
      return;
    }
    const response = await search(debouncedSearchTerm);
    if (response.error) {
      throw new Error("No Books Found");
    }
    setSearchItems(response);
    setIsSearching(false);
    console.log(response);
  }, [debouncedSearchTerm]);
  useEffect(() => {
    bookSearch().catch((error) => {
      setError(error.message);
      setSearchItems([]);
      setIsSearching(false);
    });
  }, [debouncedSearchTerm, bookSearch]);

  return (
    <div className={classes["search-books"]}>
      <div className={classes["search-books-bar"]}>
        <button
          className={classes["close-search"]}
          onClick={props.onCloseSearch}
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
          <input
            type="text"
            placeholder="Search by title or author"
            value={enteredSearchTerm}
            onChange={enteredSearchTermChangeHandler}
          />
        </div>
      </div>
      {isSearching && <CircularLoading panner="Searching"></CircularLoading>}
      {!isSearching && (
        <SearchResults searchResults={searchItems} error={error} />
      )}
    </div>
  );
};
export default Search;
