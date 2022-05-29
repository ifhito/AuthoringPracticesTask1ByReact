import { MouseEventHandler } from 'react';
import DialogButton from '../Atoms/DialogButton';
type propsType = {
    text:string;
    label?:string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    handleClickCancel: () => void;
}
const DialogInputButton = ({text,handleClick, label, handleClickCancel}:propsType) => (
    <>
        <DialogButton label={label} handleClick={handleClick}>
            {text}
        </DialogButton>
        <DialogButton handleClick={handleClickCancel} >
            キャンセル
        </DialogButton>
    </>
)

export default DialogInputButton;