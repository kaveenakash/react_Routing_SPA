import React from "react";

import "./FullPost.css";

const FullPost = (props) => {
  let post = <p>Please select a Post!</p>;
  return (
    <div className="FullPost">
      <h1>Title</h1>
      <p>Content</p>
      <div className="Edit">
        <button className="Delete">Delete</button>
      </div>
    </div>
  );
};

export default FullPost;
