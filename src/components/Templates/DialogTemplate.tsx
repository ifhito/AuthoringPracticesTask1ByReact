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
    <div className={styles.dialogForm}>
      <h2 id={ariaLabelledby}>{title}</h2>
      <form className={styles.form} action='' method='dialog'>
        {children[0]}
        {children[1]}
      </form>
    </div>
  </dialog>
);

export default DialogTemplate;
