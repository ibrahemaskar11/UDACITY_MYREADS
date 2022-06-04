import { createContext } from "react";
const MyReadsContext = createContext({
  books: [],
  isLoading: false,
  getMyBooks: () => {},
  updateMyBooks: (book, shelf) => {},
});
export default MyReadsContext