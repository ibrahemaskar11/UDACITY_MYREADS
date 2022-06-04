import { useEffect, useState, useContext } from "react";
import "./App.css";
import Home from "./components/Layout/Home";
import Search from "./components/Layout/Search";
import MyReadsProvider from "./Store/MyReadsProvider";
import MyReadsContext from "./Store/MyReadsContext";
const App = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const setShowShearchHandler = () => {
    setShowSearch(true);
  };
  const closeSearchHandler = () => {
    setShowSearch(false);
  };
  let content = <Home onShowSearch={setShowShearchHandler} />;
  if (showSearch) {
    content = <Search onCloseSearch={closeSearchHandler} />;
  }
  return <MyReadsProvider>{content}</MyReadsProvider>;
};
export default App;
