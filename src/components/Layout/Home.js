/*
-Home component is used to render Boook Shelvs
*/
import BookShelf from "../Books/BookShelf";
import classes from "./Home.module.css";
import { useContext, Fragment } from "react";
import MyReadsContext from "../../Store/MyReadsContext";
import CircularLoading from "../UI/CircularLoading";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { isLoading } = useContext(MyReadsContext);
  
  //page content constant is used for clean code purposes
  const pageContent = (
    <div className={classes["page-content"]}>
      <div className={classes["list-books-content"]}>
        <div>
          <BookShelf type="currentlyReading" title="Currently Reading" />
          <BookShelf type="read" title="Read" />
          <BookShelf type="wantToRead" title="Want to Read" />
        </div>
      </div>
      <div className={classes["open-search"]}>
        {/*
          -a link is used to move to the search route when the button is clicked
        */}
        <Link to="search" className={classes["open-search-btn"]} />
      </div>
    </div>
  );

  return (
    //React fragment is used to avoid unnecessary div rendering
    <Fragment>
      <div className={classes["list-books-title"]}>
        <h1>MyReads</h1>
      </div>
      {/*
        -if isLoading value is true the CircularLoading component is rendered
        -else the pageContent is rendered
      */}
      {isLoading && <CircularLoading panner="Loading" />}
      {!isLoading && pageContent}
    </Fragment>
  );
};
export default Home;
