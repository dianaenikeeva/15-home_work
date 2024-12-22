import React from "react";
import { useState } from "react";
import styled from "styled-components";
import posts from "./data/posts";
import "./App.css";
import Card from "./components/Card";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
`;

const App = () =>{
  const [ postList, setPostList] = useState(posts);
  const removePost = (id) =>{
    setPostList(postList.filter((post) => post.id !== id))
  }

  const editPost = (id, newDescription) => {
    setPostList(postList.map(post => post.id === id ? {...post, description: newDescription} : post));
  };


  return (
    <Container>
      {postList.map((post) => (
        <Card key={post.id} post={post} removePost={removePost} editPost={editPost}/>
      ))}
    </Container>
  )
}

export default App;
