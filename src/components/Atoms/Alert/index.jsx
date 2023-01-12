import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
const Alert = ({ isActive, alertMessage }) => {
  return <StyledAlert isActive={isActive}>{alertMessage}</StyledAlert>;
};
export default Alert;
const StyledAlert = styled.div`
  display: ${({ isActive }) => {
    return isActive ? "block" : "none";
  }};
  padding: 10px 20px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.RED};
  ${TEXT.S};
  font-weight: 500;
  font-family: ${FONTFAMILY.NOTO_SANS};
  width: 87.5%;
  max-width: 400px;
  border-radius: 4px;
`;
