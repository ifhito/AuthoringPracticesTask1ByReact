import { Children, ReactNode } from 'react';
import { HTMLDialogElement } from '../../dialogType';
const DialogTemplate = ({_ref, id, title, children, dialogRole="dialog"}:{_ref: React.MutableRefObject<HTMLDialogElement| null>, id: string, title: string, children:ReactNode[], dialogRole?: string}) => (
    <dialog role={dialogRole} id={id} ref={_ref}>
        <h2>{title}</h2>
        <form method='dialog'>
        {children[0]}
        {children[1]}
        </form>
    </dialog>
)

export default DialogTemplate;