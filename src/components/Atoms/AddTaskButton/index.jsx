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
      <ImgLabelContainer>
        <img
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
          src={plus}
        />
        {props.label}
      </ImgLabelContainer>
    </Button>
  );
};
export default AddTaskButton;

const HoverEllipse = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 126px;
  height: 24px;
`;
const ImgLabelContainer = styled.div`
  position: absolute;
  display: flex;
  padding: 2px 6px;
  top: 0;
  left: 0;
  color: ${COLOR.GREEN};
  ${TEXT.S}
  font-weight: 500;
  font-family: ${FAMILY.NOTO_SANS};
`;
const Button = styled.button`
  position: relative;
  padding: 0;
  width: 130px;
  height: 24px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  &:hover ${HoverEllipse} {
    border-radius: 9999px;
    background-color: ${COLOR.GREEN};
    opacity: 0.2;
  }
`;
