import { call, put } from "redux-saga/effects";
import { addStories } from "../slices/StoriesSlice";
import { fetchStories } from "../../api/story";

function* handleFetchStories(action) {
  const { query } = action;
  const result = yield call(fetchStories, query);
  yield put(addStories(result.hits));
}

export { handleFetchStories };
