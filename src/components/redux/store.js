import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videos/videosSlice";

const store = configureStore({
  reducer: {
    videos: videosReducer,
  },
});

export default store;
