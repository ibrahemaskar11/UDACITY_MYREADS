import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Layout/Home";
import Search from "./components/Layout/Search";
import { useEffect, useContext } from "react";
import MyReadsContext from "./Store/MyReadsContext";
import MyReadsProvider from "./Store/MyReadsProvider";

const App = (props) => {
  const { getMyBooks } = useContext(MyReadsContext);
  //useEffect is used with on dependency to call getMyBooks as soon as the App is deployed
  useEffect(() => {
    getMyBooks();
  }, []);

  return (
    //React Router is used to allow building a SPA application
    <Router>
      {/*
          -there exists two routes in this application the home route which is denoted by '/' and the search route which is denoted by '/search/
        */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};
export default App;
