import DialogButton from '../Atoms/DialogButton';
import { ReactNode } from 'react';
import DialogInput from '../Atoms/DialogInput';
type propsType = {
    id:number;
    title:string;
    discription:string;
    deadline:string;
    checked: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    children?: ReactNode[]
}
const TodoContent = ({id, title, discription, deadline, checked, handleChange, children=[]}:propsType) => (
    <li>
        <article>
            <label>
                <DialogInput type='checkbox' name={title} value={String(id)} checked={checked} handleChange={handleChange}/>
                <h2>{title}</h2>
            </label>
            <div>{discription}</div>
            <div>{deadline}</div>
            {children[0]}
            {children[1]}
        </article>
    </li>
)

export default TodoContent;