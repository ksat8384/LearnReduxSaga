import { configureStore } from "@reduxjs/toolkit";
import storiesSlice from "./slices/StoriesSlice";
import archiveSlice from "./slices/ArchiveSlice";

const store = configureStore({
  reducer: {
    stories: storiesSlice,
    archive: archiveSlice,
  },
});

export default store;
