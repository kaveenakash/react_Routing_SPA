import React,{useState,useEffect}from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/Fullpost/FullPost";
import NewPost from "../../components/Newpost/NewPost";
import "./Blog.css";
import axios from "axios";


  
const Blog = () => {
  const [name,setName] = useState('')

  return (
    <div>
      <section className="Posts">
        <Post />
        <Post />
        <Post />
      </section>
      <section>
        <FullPost />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

export default Blog;
