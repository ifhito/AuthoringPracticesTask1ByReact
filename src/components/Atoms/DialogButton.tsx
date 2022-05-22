import { ReactNode, MouseEventHandler } from 'react';
type propsType = {
    handleClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}
const DialogButton = ({handleClick, children}:propsType) => (
    <button type="button" onClick={handleClick}>
        {children}
    </button>
)

export default DialogButton