import { configureStore } from "@reduxjs/toolkit";
import storiesSlice from "./StoriesSlice";
import archiveSlice from "./ArchiveSlice";

const store = configureStore({
  reducer: {
    stories: storiesSlice,
    archive: archiveSlice,
  },
});

export default store;
