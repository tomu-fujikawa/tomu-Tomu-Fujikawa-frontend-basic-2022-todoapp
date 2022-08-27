import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FAMILY from "../../../variables/font_family";
const AddTaskButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <HoverEllipse />
      <img
        style={{
          width: 20,
          height: 20,
          marginRight: 10,
        }}
        src={plus}
      />
      <p
        style={{
          margin: 0,
        }}
      >
        タスクを追加
      </p>
    </Button>
  );
};
export default AddTaskButton;

const HoverEllipse = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 126px;
  height: 24px;
  background-color: transparent;
  border-color: transparent;
  color: ${COLOR.GREEN};
  ${TEXT.S}
  font-weight: 500;
  font-family: ${FAMILY.NOTO_SANS};
  cursor: pointer;
  &:hover ${HoverEllipse} {
    border-radius: 9999px;
    background-color: ${COLOR.GREEN};
    opacity: 0.2;
  }
`;
