import { ReactNode } from "react";
import styles from "./DialogInputWithLabel.module.css";
const DialogInputWithLabel = ({
  label,
  children,
}: {
  label: string;
  children?: ReactNode;
}) => (
  <label className={styles.label}>
    <p className={styles.labelText}>{label}</p>
    {children}
  </label>
);

export default DialogInputWithLabel;
