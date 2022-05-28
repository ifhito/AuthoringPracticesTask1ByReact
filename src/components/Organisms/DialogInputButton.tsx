import { MouseEventHandler } from 'react';
import DialogButton from '../Atoms/DialogButton';
type propsType = {
    text:string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    handleClickCancel: MouseEventHandler<HTMLButtonElement>;
}
const DialogInputButton = ({text,handleClick, handleClickCancel}:propsType) => (
    <>
        <DialogButton handleClick={handleClick}>
            {text}
        </DialogButton>
        <DialogButton handleClick={handleClickCancel} >
            キャンセル
        </DialogButton>
    </>
)

export default DialogInputButton;