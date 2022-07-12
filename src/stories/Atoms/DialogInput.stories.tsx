import React from "react";

import DialogInput from "../../components/Atoms/DialogInput";
import styles from "../components/Pages/Main.module.css";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: DialogInput,
  title: "example/dialogInput",
} as ComponentMeta<typeof DialogInput>;

const Template: ComponentStory<typeof DialogInput> = (args) => (
  <DialogInput {...args} />
);
export const Default = Template.bind({});

Default.args = {
  handleChange: () => {},
  value: "test",
  name: "test",
  id: "test",
  type: "text",
  ariaLabel: "test",
};
