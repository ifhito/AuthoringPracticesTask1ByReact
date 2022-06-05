import React from "react";
const DialogInput = ({
  handleChange,
  id,
  value,
  type,
  name,
  checked,
  style,
}: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
  type: string;
  name?: string;
  checked?: boolean;
  style?: string;
}) => (
  <input
    className={style ?? ""}
    id={id}
    type={type}
    name={name}
    value={value}
    checked={checked}
    onChange={handleChange}
  />
);

export default DialogInput;
