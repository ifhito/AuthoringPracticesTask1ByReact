import TodoContent from "../Molecules/TodoContent"
import DialogButton from '../Atoms/DialogButton';
import { todo } from '../../dialogType';
import styles from './TodoList.module.css'

type propsType = {
    todoList: todo[];
    handleClickEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleClickDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleTodoCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TodoList = ({todoList, handleClickEdit, handleClickDelete, handleTodoCheckChange}:propsType) => {
    const domList = todoList.map((todo, index) => (
        <TodoContent key={todo.title+index} id={index} title={todo.title} discription={todo.discription} deadline={todo.deadline} checked={todo.checked} handleChange={handleTodoCheckChange}>
            <DialogButton handleClick={handleClickEdit} value={String(index)} name={todo.title} label={`${todo.title}のTODOを編集する`}>編集</DialogButton>
            <DialogButton handleClick={handleClickDelete} value={String(index)} name={todo.title} label={`${todo.title}のTODOを削除する`}>削除</DialogButton>
        </TodoContent>
    ))
    return <ul className={styles.todoListUl}>{domList}</ul>
}

export default TodoList;