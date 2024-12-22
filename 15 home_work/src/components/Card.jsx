import React  from "react";
import {useState} from "react";
import styled from "styled-components";
import Menu from "./Menu";
import posts from "../data/posts";


const CardStyle = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #181818;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding:16px;
  width: 300px;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 768px){
    width: 200px;
  }

  @media (max-width: 480px){
  width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 8px;
  @media (max-width: 768px){
  font-size: 1rem;
  }

  @media (max-width: 480px){
    font-size; 0.875rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
  @media (max-width: 768px){
    font-size: 0.875rem;
  }

  @media (max-width: 480px){
    font-size: 0.75rem;
  }
`;

const MenuButton = styled.button`
  background:none;
  border:none;
  position:abslute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  font-size: 1.25rem;
  color:#555;
`;

const Input = styled.input`
  width: 100%;
  padding:8px;
  margin:8px 0;
  border:1px solid #646464;
  border-radius: 4px;
  font-size: 1rem;
`;


const Card = ({post, removePost, editPost}) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const toggleMenu = () =>{
    setMenuVisible((menuVisible) => !menuVisible)
  }
  const remove = () => {
    removePost(post.id)
  }
  const [favs, setFavs] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState(post.description);
  const handleEdit = () =>{
    setIsEdit(true);
    setDescription(post.description)
    setMenuVisible(false);
  };
  const saveEdit = () => {
    editPost(post.id, description);
    setIsEdit(false);
  }


  return(
    <CardStyle>
      <MenuButton onClick={toggleMenu}>⋮</MenuButton>
      <Menu isVisible = {menuVisible} remove={remove} setFavs={setFavs}  favs={favs} editPost={handleEdit} ></Menu>
      {isEdit ? (
        <div>
          <Input 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Edit description" 
          />
          <button onClick={saveEdit}>Save</button> 
        </div>
      ) : (
        <>
          <Title style={favs ? { color: '#ff8ea1' } : {}}>{post.title}</Title>
          <Description style={favs ? { color: '#ff8ea1' } : {}}>{post.description}</Description>
        </>
      )}
    </CardStyle>
  );

};
export default Card;