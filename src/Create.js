import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitle,
  setBody,
  setAuthor,
  setIsPending,
} from "./blogSlice";

const Create = () => {
  const dispatch = useDispatch();
  const { title, body, author, isPending } = useSelector(
    (state) => state.blog
  );
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    dispatch(setIsPending(true));

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      dispatch(setIsPending(false));
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add new blog-</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
        <label>Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => dispatch(setBody(e.target.value))}
        ></textarea>
        <label>Blog Author: </label>
        <select
          value={author}
          onChange={(e) => dispatch(setAuthor(e.target.value))}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Loading...</button>}
      </form>
    </div>
  );
};

export default Create;
