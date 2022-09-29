import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Input",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
const onEditComplete = () => console.log("上手くいってるかも");
const defaultValue = "多分上手くいってるはず";
const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onEditComplete,
  defaultValue,
};
