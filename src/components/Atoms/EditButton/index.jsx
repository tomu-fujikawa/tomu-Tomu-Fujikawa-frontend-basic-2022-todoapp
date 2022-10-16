import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";
const EditButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <HoverCircle />
      <Img src={pencil} />
    </Button>
  );
};
export default EditButton;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const HoverCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  position: relative;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  padding: 0px;
  width: 20px;
  height: 20px;
  &:hover ${HoverCircle} {
    border-radius: 50%;
    background-color: ${COLOR.LIGHT_GRAY};
    opacity: 0.2;
  }
`;
