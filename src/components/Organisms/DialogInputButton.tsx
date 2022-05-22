import { MouseEventHandler } from 'react';
import DialogButton from '../Atoms/DialogButton';
type propsType = {
    handleClickAdd: MouseEventHandler<HTMLButtonElement>;
    handleClickCancel: MouseEventHandler<HTMLButtonElement>;
}
const DialogInputButton = ({handleClickAdd, handleClickCancel}:propsType) => (
    <>
        <DialogButton handleClick={handleClickAdd}>
            追加する
        </DialogButton>
        <DialogButton handleClick={handleClickCancel} >
            キャンセル
        </DialogButton>
    </>
)

export default DialogInputButton;