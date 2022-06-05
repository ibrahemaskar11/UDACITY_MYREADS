/* 
-Search component is used to implement the search functionality and produce the search results
*/
import classes from "./Search.module.css";
import useDebounce from "../../hooks/useDebounce";
import { search } from "../../BooksAPI";
import { useCallback, useContext, useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import CircularLoading from "../UI/CircularLoading";
import { Link } from "react-router-dom";
import MyReadsContext from "../../Store/MyReadsContext";
const Search = (props) => {
  const [enteredSearchTerm, setEnteredSearchTerm] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const { getMyBooks } = useContext(MyReadsContext);

  //useDebounce is a custom hook that takes the entered value to be debounced and the wanted delay
  //further explaination is in the useDebounce component
  const debouncedSearchTerm = useDebounce(enteredSearchTerm, 300);
  //enteredSearchTermChangeHandler is used to update the enteredSearchTerm state with each key stroke
  const enteredSearchTermChangeHandler = (event) => {
    setEnteredSearchTerm(event.target.value);
  };
  //bookSearch is an async function used to search for books using the debouncedSearchTerm
  //debouncedSearchTerm is passed to the search function from BookAPI
  //useCallback is used to allow the bookSearch to be memoized and used as a dependency in useEffect
  const bookSearch = useCallback(async () => {
    setIsSearching(true);
    setError(null);
    //if the debouncedSearchTerm is empty the function returns
    if (debouncedSearchTerm.trim() === "") {
      setIsSearching(false);

      setSearchItems([]);
      return;
    }
    const response = await search(debouncedSearchTerm);
    //if the response results in an error that means that no books were found
    //for that reason we throw an error and catch it later when the function is called to terminate the
    if (response.error) {
      throw new Error("No Books Found");
    }
    //if the search results were thruthy the serachItems state is set to the response and the serach is to be terminated
    setSearchItems(response);
    setIsSearching(false);
  }, [debouncedSearchTerm]);
  //useEffect is called whenever the dobouncedSerachTerm, or bookSearch function is altered
  //in useEffect the bookSerach function is called and if it result in a respone error a catch statement is used to set the error, stop searching and set searchItems state to an empty array
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
        {/*
          -a link is used to move to the home route when the button is clicked
        */}
        <Link className={classes["close-search"]} to="/" />
        <div className={classes["search-books-input-wrapper"]}>
          {/*
            -two way binding is used to set the enteredSearch state with each key stroke 
          */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={enteredSearchTerm}
            onChange={enteredSearchTermChangeHandler}
          />
        </div>
      </div>
      {/*
        -if isSearching state is truthy CiruclarLoading component is rendered
        -else SearchResults component is rendered
      */}
      {isSearching && <CircularLoading panner="Searching"></CircularLoading>}
      {!isSearching && (
        <SearchResults searchResults={searchItems} error={error} />
      )}
    </div>
  );
};
export default Search;
