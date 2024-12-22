import React from "react";
import styled from "styled-components";

const MenuStyle = styled.div`
  position: absolute;
  top: 36px;
  left: 15px;
  background-color: #1a1a1a;
  border:1px solid #181818;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius:8px;
  display: ${({isVisible}) => (isVisible ? "block" : "none")};
  z-index:10;
`;

const MenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background:#6d6b6b
  }
`;


const Menu = ({isVisible, remove, favs, setFavs, editPost}) =>{
  return(
    <MenuStyle isVisible = {isVisible}>
      <MenuItem onClick={editPost}>Edit</MenuItem>
      <MenuItem onClick={remove}>Delete</MenuItem>
      <MenuItem onClick={() => setFavs(!favs)}  >Add to favs</MenuItem>
    </MenuStyle>
  )
}


export default Menu;

