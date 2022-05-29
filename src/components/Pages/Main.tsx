import { useInput, useDialogRef } from '../../customHook';
import DialogInputContents from '../Organisms/DialogInputContents';
import DialogTemplate from '../Templates/DialogTemplate';
import DialogInput from '../Atoms/DialogInput';
import DialogInputButton from '../Organisms/DialogInputButton';
import { useCallback, useRef, useState, MouseEventHandler } from 'react';
import TodoList from '../Organisms/TodoList';
import { todo } from '../../dialogType';


const Main = () => {
    const [todoVal, setTodoVal] = useState<todo[]>([])
    const [selectTodoId, setSelectTodoId] = useState('')
    const {values:addDialogValues, onChange: addDialogOnChange, setValues: setTodoInputValues} = useInput<todo>({
        title: '',
        discription: '',
        deadline: ''
    })
    const handleClickAdd = async () => {
        const newTodoVal = todoVal.concat(addDialogValues);
        setTodoVal(newTodoVal)
        setTodoInputValues({
            title: '',
            discription: '',
            deadline: ''
        })
        console.log(newTodoVal)
        closeAddModal();

    }
    const handleClickDelete = () => {
        const newTodoVal = [...todoVal]
        newTodoVal.splice(parseInt(selectTodoId), 1);
        console.log(newTodoVal)
        setTodoVal(newTodoVal);
        closeDeleteModal();
    }

    const handleClickEdit = () => {
        const newTodoVal = [...todoVal]
        // const id = (e.target as HTMLInputElement).value;
        newTodoVal.splice(parseInt(selectTodoId), 1, addDialogValues);
        console.log(newTodoVal, selectTodoId, addDialogValues)
        setTodoVal(newTodoVal)
        setTodoInputValues({
            title: '',
            discription: '',
            deadline: ''
        })
        closeEditModal();
    }
    const dialogInputContentsDict = [
        {
            label: "タイトル",
            inputChildren: <DialogInput type='text' name='title' value={addDialogValues.title} handleChange={addDialogOnChange}/>
        },
        {
            label: "詳細",
            inputChildren: <DialogInput type='text' name='discription' value={addDialogValues.discription} handleChange={addDialogOnChange}/>
        },
        {
            label: "期限",
            inputChildren: <DialogInput type='date' name='deadline' value={addDialogValues.deadline} handleChange={addDialogOnChange}/>
        }
    ]
    const handleClickShowEditModal = (e:React.MouseEvent<HTMLButtonElement>) => {
        const id = (e.target as HTMLInputElement).value
        setTodoInputValues(todoVal[parseInt(id)])
        setSelectTodoId(id)
        showEditModal()
    }
    const handleClickShowDeleteModal = (e:React.MouseEvent<HTMLButtonElement>) => {
        const id = (e.target as HTMLInputElement).value
        setSelectTodoId(id)
        showDeleteModal()
    }
    const {modalRef: addModalRef, showModal: showAddModal, closeModal: closeAddModal} = useDialogRef()
    const {modalRef: deleteModalRef, showModal: showDeleteModal, closeModal: closeDeleteModal} = useDialogRef()
    const {modalRef: editModalRef, showModal: showEditModal, closeModal: closeEditModal} = useDialogRef()
    return (
        <>
        <button type="button" onClick={showAddModal}>
        追加する
        </button>
        <TodoList handleClickEdit={handleClickShowEditModal} handleClickDelete={handleClickShowDeleteModal} todoList={todoVal}/>
        <DialogTemplate _ref={addModalRef} id="addDialog" title="TODOを追加する">
            <DialogInputContents inputArrayList={dialogInputContentsDict}/>
            <DialogInputButton text="TODOを追加する" handleClick={handleClickAdd} handleClickCancel={closeAddModal}/>
        </DialogTemplate>
        <DialogTemplate _ref={deleteModalRef} id="deleteDialog" title="TODOを削除する" dialogRole='alertdialog'>
            <div>選択したアイテムを削除しますか?</div>
            <div>
            <DialogInputButton text="TODOを削除する" handleClick={handleClickDelete} handleClickCancel={closeDeleteModal}/>
            </div>
        </DialogTemplate>
        <DialogTemplate _ref={editModalRef} id="editDialog" title="TODOを編集する">
            <DialogInputContents inputArrayList={dialogInputContentsDict}/>
            <DialogInputButton text="TODOを編集する" handleClick={handleClickEdit} handleClickCancel={closeEditModal}/>
        </DialogTemplate>
        </>
    )
}

export default Main;