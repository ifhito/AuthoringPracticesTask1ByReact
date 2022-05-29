import { ReactNode, MouseEventHandler } from 'react';
type propsType = {
    handleClick: MouseEventHandler<HTMLButtonElement>;
    value?: string;
    name?:string;
    label?: string;
    children: ReactNode;
}
const DialogButton = ({handleClick, value='', name='', label='', children}:propsType) => (
    <button type="button" value={value} name={name} aria-label={label} onClick={handleClick}>
        {children}
    </button>
)

export default DialogButton