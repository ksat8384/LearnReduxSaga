import { createSlice } from "@reduxjs/toolkit";

const archiveSlice = createSlice({
  name: "archive",
  initialState: [],
  reducers: {
    archiveStory(state, action) {
      const archive = { state };
      console.log("archive =", archive);
      const { objectID } = action.payload;
      console.log("objectID -->>", objectID);
      return [...state, objectID];
    },
  },
});

export const { archiveStory } = archiveSlice.actions;

export default archiveSlice.reducer;
