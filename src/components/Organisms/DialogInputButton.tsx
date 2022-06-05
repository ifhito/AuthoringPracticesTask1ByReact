import { MouseEventHandler } from "react";
import DialogButton from "../Atoms/DialogButton";
import styles from "./DialogInputButton.module.css";
type propsType = {
  text: string;
  label?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  handleClickCancel: () => void;
  dialogButtonStyle: string;
  dialogCancelButton: string;
};
const DialogInputButton = ({
  text,
  handleClick,
  label,
  handleClickCancel,
  dialogButtonStyle,
  dialogCancelButton,
}: propsType) => (
  <div className={styles.dialogInputButton}>
    <DialogButton
      style={dialogButtonStyle}
      label={label}
      handleClick={handleClick}
    >
      {text}
    </DialogButton>
    <DialogButton style={dialogCancelButton} handleClick={handleClickCancel}>
      キャンセル
    </DialogButton>
  </div>
);

export default DialogInputButton;
