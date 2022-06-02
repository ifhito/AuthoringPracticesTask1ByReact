import React from "react";
const DialogInput = ({
  handleChange,
  id,
  value,
  type,
  name,
  checked,
}: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
  type: string;
  name?: string;
  checked?: boolean;
}) => (
  <input
    id={id}
    type={type}
    name={name}
    value={value}
    checked={checked}
    onChange={handleChange}
  />
);

export default DialogInput;
