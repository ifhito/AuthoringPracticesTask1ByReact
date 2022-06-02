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
  <li>
    <article className={styles.todoWrapper}>
      <DialogInput
        id={String(id)}
        type='checkbox'
        name={title}
        value={String(id)}
        checked={checked}
        handleChange={handleChange}
      />
      <div>
        <label htmlFor={String(id)}>
          <h2>{title}</h2>
        </label>
        <div className={styles.todoWrapper}>
          <div>
            <div>{discription}</div>
            <time dateTime={deadline}>{deadline}</time>
          </div>
          {children[0]}
          {children[1]}
        </div>
      </div>
    </article>
  </li>
);

export default TodoContent;
