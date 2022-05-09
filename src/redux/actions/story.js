import { STORIES_FETCH } from "../constants/actionTypes";
const doFetchStories = (query) => ({
  type: STORIES_FETCH,
  query,
});

export { doFetchStories };
