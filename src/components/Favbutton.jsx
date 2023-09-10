import React from 'react'
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";



function Favbutton() {
  return (
    <Button>
      <div>
      <FaRegHeart></FaRegHeart>
      <h4>Add to Menu</h4>
      </div>
    </Button>
  );
}

const Button = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f7f0d9;
  background: #9cb490;
  font-weight: 400;
  position: relative;
  border-radius: 4px;
  transform: scale(0.8);
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #f7f0d9;
  }
  h4 {
    margin-left: 2rem;
    color: #f7f0d9;
  }
`;

export default Favbutton