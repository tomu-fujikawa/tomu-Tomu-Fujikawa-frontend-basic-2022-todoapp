import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
const defaultIsEditing = false;
const taskCompleted = () => {
  console.log("task completed");
};
const editCompleted = (text) => {
  console.log("taskname changed: " + text);
};
const setIsEditingFalse = false;
const setIsEditingTrue = true;
const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  defalutValue: "test",
  defaultIsEditing,
  taskCompleted,
  editCompleted,
  setIsEditingFalse,
  setIsEditingTrue,
};
