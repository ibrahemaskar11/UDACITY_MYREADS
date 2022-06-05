/*
-creating MyReadsContext
-all context elements are added in this component for better auto completion through out the project
*/
import { createContext } from "react";
const MyReadsContext = createContext({
  books: [],
  isLoading: false,
  getMyBooks: () => {},
  updateMyBooks: (book, shelf) => {},
});
export default MyReadsContext;
