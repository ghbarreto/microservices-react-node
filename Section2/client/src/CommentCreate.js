import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={e => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;

// axios.post('http://localhost:4000/events', event).catch((err) => {
//   console.log(err.message);
// });
// axios.post('http://localhost:4001/events', event).catch((err) => {
//   console.log(err.message);
// });
// axios.post('http://localhost:4002/events', event).catch((err) => {
//   console.log(err.message);
// });
// res.send({ status: 'OK' });
