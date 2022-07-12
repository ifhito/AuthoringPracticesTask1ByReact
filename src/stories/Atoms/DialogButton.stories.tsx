import React from "react";

import DialogButton from "../../components/Atoms/DialogButton";
import styles from "../../components/Pages/Main.module.css";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: DialogButton,
  title: "example/dialogButton",
} as ComponentMeta<typeof DialogButton>;

const Template: ComponentStory<typeof DialogButton> = (args) => (
  <DialogButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  handleClick: () => {},
  value: "test",
  name: "test",
  label: "test",
  children: "test",
  style: styles.addButton,
};
