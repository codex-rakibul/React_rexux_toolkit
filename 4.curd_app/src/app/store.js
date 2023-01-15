import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../fetaures/bookSlicer/booksSlice";

const store = configureStore({
  reducer: {
    bookReducer: bookReducer,
    
  },
});
export default store;