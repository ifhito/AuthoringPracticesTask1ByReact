import React from "react";

import DialogInputWithLabel from "../../components/Molecules/DialogInputWithLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Default } from "../Atoms/DialogInput.stories";

export default {
  component: DialogInputWithLabel,
  title: "example/DialogInputWithLabel",
} as ComponentMeta<typeof DialogInputWithLabel>;

const Template: ComponentStory<typeof DialogInputWithLabel> = (args) => {
  const { label, children } = args;
  return <DialogInputWithLabel label={label}>{children}</DialogInputWithLabel>;
};

export const DefaultValue = Template.bind({});
const args = {
  handleChange: () => {},
  value: "test",
  name: "test",
  id: "test",
  type: "text",
  ariaLabel: "test",
};
DefaultValue.args = {
  label: "test",
  children: <Default {...args} />,
};
