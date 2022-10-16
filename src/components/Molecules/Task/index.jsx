import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../../Atoms/Checkbox/index.jsx";
import Editbutton from "../../Atoms/EditButton/index.jsx";
import Input from "../../Atoms/Input/index.jsx";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Task = ({
  defalutValue,
  defaultIsEditing,
  taskCompleted,
  editCompleted,
  setIsEditingFalse,
  setIsEditingTrue,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const checkBoxOnClick = () => {
    taskCompleted(), setIsEditing(false);
  };
  const editButtonOnClick = () => {
    setIsEditing(setIsEditingTrue);
  };
  const inputOnEditCompleted = (text) => {
    editCompleted(text);
    setIsEditing(setIsEditingFalse);
  };
  return (
    <StyledTaskContainer>
      <Checkbox onClick={checkBoxOnClick} />
      {!isEditing && (
        <StyledToDoItemContainer>
          <StyledToDoItem>{defalutValue}</StyledToDoItem>
          <Editbutton onClick={editButtonOnClick} />
        </StyledToDoItemContainer>
      )}
      {isEditing && (
        <Input
          defaultValue={defalutValue}
          onEditComplete={inputOnEditCompleted}
        ></Input>
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
