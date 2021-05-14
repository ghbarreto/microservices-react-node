import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };

  return (
    <div>
      <form
        // everytime the user submits the form the onsubmit is called
        onSubmit={onSubmit}
      >
        <div className="form-group">
          <label>Title</label>
          <input
            // setting the useState value with the title after the onChange function kicks in
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
