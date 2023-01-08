import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONT_FAMILY from "../../../variables/font_family";
const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};
export default Title;

const StyledText = styled.div`
  margin-bottom: 20px;
  color: ${COLOR.WHITE};
  ${TEXT.M}
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.L}
  }
  font-family: ${FONT_FAMILY.ROBOTO};
`;
