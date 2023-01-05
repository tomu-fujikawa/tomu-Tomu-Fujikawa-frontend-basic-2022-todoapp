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

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  defalutValue: "test",
  taskCompleted: () => {
    console.log("task completed");
  },
  editCompleted: (text) => {
    console.log("taskname changed: " + text);
  },
  defaultIsEditing: false,
};
