import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

const EditButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <HoverCircle />
      <img
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 15,
          height: 15,
        }}
        src={pencil}
      />
    </Button>
  );
};
export default EditButton;

const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
  &:hover ${HoverCircle} {
    border-radius: 50%;
    background-color: ${COLOR.LIGHT_GRAY};
    opacity: 0.2;
  }
`;
const HoverCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
