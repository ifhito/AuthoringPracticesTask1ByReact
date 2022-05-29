import { MouseEventHandler } from 'react';
import DialogButton from '../Atoms/DialogButton';
type propsType = {
    text:string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    handleClickCancel: () => void;
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