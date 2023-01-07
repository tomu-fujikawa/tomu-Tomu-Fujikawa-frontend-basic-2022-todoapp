import React, { useState } from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title/index.jsx";
import TodoCard from "../../Organisms/TodoCard/index.jsx";
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
`;
