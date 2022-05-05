import { configureStore } from "@reduxjs/toolkit";
import storiesSlice from "./StoriesSlice";

const store = configureStore({
  reducer: {
    stories: storiesSlice,
  },
});

export default store;
