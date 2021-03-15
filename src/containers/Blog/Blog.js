import React, { useState, useEffect } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/Fullpost/FullPost";
import NewPost from "../../components/Newpost/NewPost";
import "./Blog.css";
// import axios from "axios";
import axios from '../../axios'

const Blog = () => {
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("/posts")
      .then((response) => {
        const allPosts = response.data.slice(0, 4);
        const updatedPosts = allPosts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        setPosts(updatedPosts);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  const postSelectedHandler = (id) => {
    setSelectedPostId(id);
  };
  let newPosts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
  if (!error) {
    newPosts = posts.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => postSelectedHandler(post.id)}
        />
      );
    });
  }

  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/new-post">New Post</a></li>
          </ul>
        </nav>
      </header>
      <section className="Posts">{newPosts}</section>
      <section>
        <FullPost id={selectedPostId} />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

export default Blog;
