import { createSlice } from "@reduxjs/toolkit";

const stories = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const storiesSlice = createSlice({
  name: "stories",
  initialState: stories,
  reducers: {
    onArchive(state, action) {
      //TODO
      console.log("state>>", state);
      console.log("action>>", action);
      const stories = { state };
      console.log("stories >>", stories);
      return state;
    },
  },
});
export const { onArchive } = storiesSlice.actions;
export default storiesSlice.reducer;
