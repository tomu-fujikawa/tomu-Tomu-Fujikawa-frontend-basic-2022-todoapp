import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../../Atoms/Checkbox/index.jsx";
import Editbutton from "../../Atoms/EditButton/index.jsx";
import Input from "../../Atoms/Input/index.jsx";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Task = ({ defalutValue, taskCompleted, editCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const editButtonOnClick = () => {
    setIsEditing(true);
  };
  const inputOnEditCompleted = (text) => {
    editCompleted(text);
    setIsEditing(false);
  };
  return (
    <StyledTaskContainer>
      <Checkbox onClick={taskCompleted} />
      {isEditing ? (
        <Input
          defaultValue={defalutValue}
          onEditComplete={inputOnEditCompleted}
        />
      ) : (
        <StyledToDoItemContainer>
          <StyledToDoItem>{defalutValue}</StyledToDoItem>
          <Editbutton onClick={editButtonOnClick} />
        </StyledToDoItemContainer>
      )}
    </StyledTaskContainer>
  );
};

const StyledTaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledToDoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 214px;
`;
const StyledToDoItem = styled.div`
  ${TEXT.S};
  color: ${COLOR.LIGHT_GRAY};
  margin-right: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export default Task;
