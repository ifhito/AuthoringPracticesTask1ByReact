import { ReactNode, MouseEventHandler } from 'react';
type propsType = {
    handleClick: MouseEventHandler<HTMLButtonElement>;
    value?: string; 
    children: ReactNode;
}
const DialogButton = ({handleClick, value='', children}:propsType) => (
    <button type="button" value={value} onClick={handleClick}>
        {children}
    </button>
)

export default DialogButton