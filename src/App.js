import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Layout/Home";
import Search from "./components/Layout/Search";
import { useState, useEffect } from "react";
import MyReadsContext from "./Store/MyReadsContext";
import { getAll as getAllBooks } from "./BooksAPI";
import { update } from "./BooksAPI";
const App = (props) => {
  //myBooks state is used to hold the books array
  //myBooks state is to be updated with each operation on the books
  const [myBooks, setMyBooks] = useState([]);
  //isLoading state is used to record the website loading state
  const [isLoading, setIsLoading] = useState(true);

  //getMyBooks is an async function used to parse the books through the book api and assign the response to myBooks state
  //each time getMyBooks is called isLoading state is set to true and after the response is parsed the isLoading state is set to false
  const getMyBooks = async () => {
    setIsLoading(true);
    const res = await getAllBooks();
    setMyBooks(res);
    setIsLoading(false);
  };
  useEffect(() => {
    getMyBooks();
  }, []);

  //updateMyBooks is used to move the books through out the different shelves updating the book values
  //after the book is updated getMyBooks function is called to update the myBooks state and to then update the home page
  const updateMyBooks = async (book, shelf) => {
    await update(book, shelf);
    getMyBooks();
  };
  //myReads object is used to hold the value of the context provider
  const MyReads = {
    books: myBooks,
    isLoading: isLoading,
    getMyBooks,
    updateMyBooks,
  };
  return (
    //React Router is used to allow building a SPA application
    <Router>
      <MyReadsContext.Provider value={MyReads}>
        {/*
          -there exists two routes in this application the home route which is denoted by '/' and the search route which is denoted by '/search/
        */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </MyReadsContext.Provider>
    </Router>
  );
};
export default App;
