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
          top: 2.5,
          left: 2.5,
          width: 15,
          height: 15,
        }}
        src={pencil}
      />
    </Button>
  );
};
export default EditButton;

const HoverCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  position: relative;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  &:hover ${HoverCircle} {
    border-radius: 50%;
    background-color: ${COLOR.LIGHT_GRAY};
    opacity: 0.2;
  }
`;
