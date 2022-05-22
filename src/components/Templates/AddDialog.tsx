import { Children, ReactNode } from 'react';
const AddDialog = ({id, title, children}:{id: string, title: string, children:ReactNode[]}) => (
    <dialog id={id} open>
        <h2>{title}</h2>
        {children[0]}
        {children[1]}
    </dialog>
)

export default AddDialog;