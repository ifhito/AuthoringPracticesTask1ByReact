import DialogButton from '../Atoms/DialogButton';
import { ReactNode } from 'react';
const TodoContent = ({id, title, discription, deadline, children=[]}:{id:number;title:string;discription:string;deadline:string; children?: ReactNode[]}) => (
    <div>
        <div>{title}</div>
        <div>{discription}</div>
        <div>{deadline}</div>
        {children[0]}
        {children[1]}
    </div>
)

export default TodoContent;