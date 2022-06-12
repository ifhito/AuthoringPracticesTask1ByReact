import React from "react";
const DialogInput = ({
  handleChange,
  id,
  value,
  type,
  name,
  checked,
  style,
  ariaLabel,
}: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
  type: string;
  name?: string;
  checked?: boolean;
  style?: string;
  ariaLabel?: string;
}) => (
  <input
    className={style ?? ""}
    id={id}
    type={type}
    name={name}
    value={value}
    aria-label={ariaLabel}
    checked={checked}
    onChange={handleChange}
  />
);

export default DialogInput;
