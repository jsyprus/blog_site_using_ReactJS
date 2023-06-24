import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  body: "",
  author: "mario",
  isPending: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    setIsPending: (state, action) => {
      state.isPending = action.payload;
    },
  },
});

export const {
  setTitle,
  setBody,
  setAuthor,
  setIsPending,
} = blogSlice.actions;

export default blogSlice.reducer;
