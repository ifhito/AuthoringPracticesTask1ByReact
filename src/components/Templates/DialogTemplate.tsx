import { Children, ReactNode } from 'react';
import { HTMLDialogElement } from '../../dialogType';
const DialogTemplate = ({_ref, id, title, children}:{_ref: React.MutableRefObject<HTMLDialogElement| null>, id: string, title: string, children:ReactNode[]}) => (
    <dialog id={id} ref={_ref}>
        <h2>{title}</h2>
        {children[0]}
        {children[1]}
    </dialog>
)

export default DialogTemplate;