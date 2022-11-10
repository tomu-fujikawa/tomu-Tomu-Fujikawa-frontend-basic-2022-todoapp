import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

const Checkbox = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={check} />
    </Button>
  );
};
export default Checkbox;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
  & > img {
    width: 14px;
    display: none;
  }
  &:hover img {
    display: block;
  }
`;
