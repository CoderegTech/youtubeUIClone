import { createSlice } from "@reduxjs/toolkit";
import { videos } from "./videos";

const initialState = {
  videos: videos,
  status: "idle",
  error: null,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
});

export const selectedAllVideos = (state) => state.videos.videos;

export default videosSlice.reducer;
