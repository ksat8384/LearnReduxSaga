import { configureStore } from "@reduxjs/toolkit";
import storiesSlice from "./slices/StoriesSlice";
import archiveSlice from "./slices/ArchiveSlice";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from '../redux/sagas'

const logger = createLogger();
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    stories: storiesSlice,
    archive: archiveSlice,
  },
  middleware: [logger, saga],
});

saga.run(rootSaga);

export default store;
