import React from 'react'
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";



function Favbutton() {
  return (
    <Button>
      <div>
      <FaRegHeart></FaRegHeart>
     
      </div>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(35deg, #715a45, #5a4a3b);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.5);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  svg {
    color: #f7f0d9;
    font-size: 2rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: #f7f0d9;
      font-size: 2rem;
    }
    h4 {
      color: #f7f0d9;
    }
  }
`;
export default Favbutton