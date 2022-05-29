import DialogButton from '../Atoms/DialogButton';
import { ReactNode } from 'react';
const TodoContent = ({id, title, discription, deadline, children=[]}:{id:number;title:string;discription:string;deadline:string; children?: ReactNode[]}) => (
    <li>
        <article>
            <h2>{title}</h2>
            <div>{discription}</div>
            <div>{deadline}</div>
            {children[0]}
            {children[1]}
        </article>
    </li>
)

export default TodoContent;