import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    console.log(res);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body" style={{ fontSize: "15px" }}>
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />

          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div
      className=" flex-row flex-wrap justify-content-between"
      style={{ display: "block" }}
    >
      <h1>{renderedPosts}</h1>
    </div>
  );
};

export default PostList;
