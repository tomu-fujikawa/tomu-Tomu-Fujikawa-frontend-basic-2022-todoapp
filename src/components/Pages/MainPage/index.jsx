import React, { useState } from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title/index.jsx";
import TodoCard from "../../Organisms/TodoCard/index.jsx";
import BREAKPOINT from "../../../variables/breakpoint";
const MainPage = () => {
  return (
    <StyledMainPage>
      <Title />
      <TodoCard />
    </StyledMainPage>
  );
};
export default MainPage;
const StyledMainPage = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 20px;
  }
`;
