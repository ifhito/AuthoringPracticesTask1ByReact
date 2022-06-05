import { ReactNode, MouseEventHandler } from "react";
type propsType = {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  value?: string;
  name?: string;
  label?: string;
  children: ReactNode;
  style?: string;
};
const DialogButton = ({
  handleClick,
  value = "",
  name = "",
  label = "",
  children,
  style,
}: propsType) => (
  <button
    className={style}
    type='button'
    value={value}
    name={name}
    aria-label={label}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default DialogButton;
