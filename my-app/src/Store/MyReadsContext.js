import { createContext } from "react";
const MyReadsContext = createContext({
  books: [],
  getMyBooks: () => {},
  updateMyBooks: (book, shelf) => {},
});
export default MyReadsContext