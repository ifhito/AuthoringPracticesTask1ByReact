import { ReactNode } from 'react';
import DialogInputWithLabel from '../Molecules/DialogInputWithLabel';
type inputArrayListType = {
    label: string,
    inputChildren: ReactNode
};

type propsType = {
    inputArrayList: inputArrayListType[];
}

const DialogInputContents = (props:propsType): JSX.Element => {
    const domList = props.inputArrayList.map(inputArray => (
        <DialogInputWithLabel key={inputArray.label} label={inputArray.label}>
            {inputArray.inputChildren}
        </DialogInputWithLabel>
    ))
    return <>{domList}</>
}

export default DialogInputContents;