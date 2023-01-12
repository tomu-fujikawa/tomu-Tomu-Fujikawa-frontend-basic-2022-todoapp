import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Task from "../../Molecules/Task/index.jsx";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";
import { useAlertHandlerContext } from "../../../contexts/alert_handler.jsx";
const TodoCard = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const loadedTaskList = localStorage.getItem("taskList");
    if (loadedTaskList === null) {
      setTaskList([]);
    } else {
      const parsedTaskList = JSON.parse(loadedTaskList);
      setTaskList([...parsedTaskList]);
    }
  }, []);
  useEffect(() => {
    const stringifiedTaskList = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringifiedTaskList);
  }, [taskList]);
  const onAddTaskButtonClick = () => {
    const addTask = {
      name: "",
      initializing: true,
    };
    setTaskList((taskList) => [...taskList, addTask]);
  };
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
      AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
    } else {
      const newTaskList = [...taskList];
      newTaskList[indexofeditedTaskName].name = editedTaskName;
      newTaskList[indexofeditedTaskName].initializing = false;
      setTaskList(newTaskList);
    }
  };
  return (
    <StyledTodoCard>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      {taskList.map((task, index) => (
        <Task
          key={index}
          defalutValue={task.name}
          editCompleted={(text) => onTaskNameChange(text, index)}
          taskCompleted={() => {
            taskCompleted(index);
          }}
          defaultIsEditing={task.initializing}
        />
      ))}
    </StyledTodoCard>
  );
};
export default TodoCard;
const StyledTodoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.5%;
  max-width: 500px;
  gap: 10px;
  padding: 20px;
  background-color: #282a2e;
  border-radius: 4px;
`;
