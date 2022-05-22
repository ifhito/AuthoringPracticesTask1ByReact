import { useInput } from '../../customHook';
import DialogInputContents from '../Organisms/DialogInputContents';
import AddDialog from '../Templates/AddDialog';
import DialogInput from '../Atoms/DialogInput';
import DialogInputButton from '../Organisms/DialogInputButton';

const Main = () => {
    const {values:addDialogValues, onChange: addDialogOnChange} = useInput({
        title: 'test',
        discription: 'test',
        deadline: '2022-10-09'
    })

    const handleClickAdd = async () => {
        let url = "localhost:5001?"
        const addDialogValuesList = Object.entries(addDialogValues)
        addDialogValuesList.forEach((value) => {
            if(value[1] != ''){
                url += value.join('=');
                url += '&';
            }
        }
        )
        url = url.slice(0, -1);
        console.log(url)
    }

    const handleClickCancel = () => {
        console.log("キャンセル")
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
    return (
        <AddDialog id="addDialog" title="TODOを追加する">
            <DialogInputContents inputArrayList={dialogInputContentsDict}/>
            <DialogInputButton handleClickAdd={handleClickAdd} handleClickCancel={handleClickCancel}/>
        </AddDialog>
    )
}

export default Main;