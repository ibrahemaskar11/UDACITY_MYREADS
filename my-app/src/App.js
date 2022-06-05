import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Layout/Home";
import Search from "./components/Layout/Search";
import MyReadsContext from "./Store/MyReadsContext";
import MyReadsProvider from "./Store/MyReadsProvider";
const App = (props) => {
  return (
    //React Router is used to allow building a SPA application
    <Router>
      <MyReadsProvider>
        {/*
          -there exists two routes in this application the home route which is denoted by '/' and the search route which is denoted by '/search/
        */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </MyReadsProvider>
    </Router>
  );
};
export default App;
