import { takeEvery, all } from "redux-saga/effects";
import { handleFetchStories } from "./Story";
import { STORIES_FETCH } from "../constants/actionTypes";

function* watchAll() {
  yield all([takeEvery(STORIES_FETCH, handleFetchStories)]);
}

export default watchAll;
