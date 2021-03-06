import DialogButton from "../Atoms/DialogButton";
import { ReactNode } from "react";
import DialogInput from "../Atoms/DialogInput";
import styles from "./TodoContent.module.css";
type propsType = {
  id: number;
  title: string;
  discription: string;
  deadline: string;
  checked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode[];
};
const TodoContent = ({
  id,
  title,
  discription,
  deadline,
  checked,
  handleChange,
  children = [],
}: propsType) => (
  <li className={`${checked ? styles.wrapperLi__checked : styles.wrapperLi}`}>
    <article className={styles.todoWrapper}>
      <div className={styles.checkboxWrapper}>
        <DialogInput
          style={styles.checkbox}
          id={String(id)}
          type='checkbox'
          name={title}
          value={String(id)}
          checked={checked}
          handleChange={handleChange}
          ariaLabel={`${title}のTODOを完了とする`}
        />
        <span aria-hidden='true'></span>
      </div>
      <div className={styles.todoContentsWrapper}>
        <div className={styles.todoDesc}>
          <label className={styles.todoLabel} htmlFor={String(id)}>
            <h2 className={checked ? styles.h2__checked : styles.h2}>
              {title}
            </h2>
          </label>
          <div className={styles.desc}>{discription}</div>
        </div>
        <div className={styles.todoDateAndButton}>
          <time dateTime={deadline}>{deadline}</time>
          <div className={styles.buttonWrapper}>
            {children[0]}
            {children[1]}
          </div>
        </div>
      </div>
    </article>
  </li>
);

export default TodoContent;
