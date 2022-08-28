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
const onEditComplete = undefined;
const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log("clicked"),
  onEditComplete: onEditComplete,
  defaultValue: undefined,
};
