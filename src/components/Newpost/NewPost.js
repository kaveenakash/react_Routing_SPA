import React, { useState } from "react";
import "./NewPost.css";
import axios from 'axios'

const NewPost = (props) => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [author,setAuthor] = useState('');

    const postDataHandler = () =>{
      const data = {
        title:title,
        body:content,
        author:author
      }
      axios.post('/posts',data)
      .then(response =>{
        console.log(response)
      })
    }

  return (
    <div className="NewPost">
      <h1>Add a Post</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>Content</label>
      <textarea
        rows="4"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <label>Author</label>
      <select
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      >
        <option value="Max">Max</option>
        <option value="Manu">Manu</option>
      </select>
      <button onClick={postDataHandler}>Add Post</button>
    </div>
  );
};

export default NewPost;
