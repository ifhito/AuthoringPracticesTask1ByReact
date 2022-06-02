import { ReactNode } from "react";
import { HTMLDialogElement } from "../../dialogType";
import styles from "./DialogTemplate.module.css";
const DialogTemplate = ({
  _ref,
  id,
  title,
  children,
  dialogRole = "dialog",
  ariaLabelledby,
  ariaDescribedby,
}: {
  _ref: React.MutableRefObject<HTMLDialogElement | null>;
  id: string;
  title: string;
  children: ReactNode[];
  dialogRole?: string;
  ariaLabelledby: string;
  ariaDescribedby: string;
}) => (
  <dialog
    role={dialogRole}
    id={id}
    ref={_ref}
    aria-labelledby={ariaLabelledby}
    aria-describedby={ariaDescribedby}
  >
    <h2 id={ariaLabelledby}>{title}</h2>
    <form className={styles.dialogForm} action='' method='dialog'>
      {children[0]}
      {children[1]}
    </form>
  </dialog>
);

export default DialogTemplate;
