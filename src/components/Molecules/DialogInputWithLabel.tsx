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
    {label}
    <p aria-hidden='true'>:</p> {children}
  </label>
);

export default DialogInputWithLabel;
