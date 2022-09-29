import React from "react";

import Birthday from "./Birthday";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Birthday",
  component: Birthday,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Birthday {...args} />;

export const Type = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type.args = {};
