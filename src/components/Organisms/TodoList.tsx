import TodoContent from "../Molecules/TodoContent"
import DialogButton from '../Atoms/DialogButton';
import { todo } from '../../dialogType';
import styles from './TodoList.module.css'

type propsType = {
    todoList: todo[];
    handleClickEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleClickDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const TodoList = ({todoList, handleClickEdit, handleClickDelete}:propsType) => {
    const domList = todoList.map((todo, index) => (
        <TodoContent key={todo.title} id={index} title={todo.title} discription={todo.discription} deadline={todo.deadline}>
            <DialogButton handleClick={handleClickEdit} value={String(index)}>編集</DialogButton>
            <DialogButton handleClick={handleClickDelete} value={String(index)}>削除</DialogButton>
        </TodoContent>
    ))
    return <ul className={styles.todoListUl}>{domList}</ul>
}

export default TodoList;