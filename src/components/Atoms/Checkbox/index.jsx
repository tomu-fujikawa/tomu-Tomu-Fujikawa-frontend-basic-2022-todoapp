import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

const Checkbox = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Square />
      <img src={check} />
    </Button>
  );
};
export default Checkbox;

const Square = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
`;
const Button = styled.button`
  position: relative;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  img {
    position: absolute;
    top: 2.5px;
    left: 2.5px;
    width: 14px;
    display: none;
  }
  &:hover img {
    display: block;
  }
`;
