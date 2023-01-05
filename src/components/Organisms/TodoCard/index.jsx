import React, { useState } from "react";
import styled from "styled-components";
import Task from "../../Molecules/Task/index.jsx";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";
const TodoCard = () => {
  const [taskList, setTaskList] = useState(["aaa", "bbb"]);
  const onAddTaskButtonClick = () => {
    setTaskList((taskList) => [...taskList, ""]);
  }; //「タクスを追加」を押した際の処理
  const taskCompleted = (indexOfCompletedTask) => {
    setTaskList(
      taskList.filter((_, index) => {
        return index != indexOfCompletedTask;
      })
    );
  };
  const onTaskNameChange = (editedTaskName, indexofeditedTaskName) => {
    if (editedTaskName === "") {
      setTaskList(
        taskList.filter((_, index) => {
          return index != indexofeditedTaskName;
        })
      );
    } else {
      const newTaskList = [...taskList];
      newTaskList[indexofeditedTaskName] = editedTaskName;
      setTaskList(newTaskList);
    }
  };
  return (
    <StyledTodoCard>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      {taskList.map((taskName, index) => (
        <Task
          defalutValue={taskName}
          editCompleted={(text) => onTaskNameChange(text, index)}
          taskCompleted={() => {
            taskCompleted(index);
          }}
        />
      ))}
      {/* <StyledTaskList>{onAddTaskButtonClick}</StyledTaskList> */}
    </StyledTodoCard>
  );
};
export default TodoCard;
const StyledTodoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;
const StyledTaskList = styled.div``;
