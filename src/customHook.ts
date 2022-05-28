import { useState, ChangeEvent, useRef, useCallback } from 'react';
import { HTMLDialogElement } from './dialogType';
type initValueType = {
    [hogekey: string]: string;
}
export const useInput = <T>(initValue:T) => {
    const [values, setValues] = useState(initValue);
    const valueSet = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    }
    return { values, onChange: valueSet , setValues}
}

export const useDialogRef = () => {
    const modalRef: React.MutableRefObject<HTMLDialogElement | null> = useRef(null)
    const showModal = useCallback(()=>{
        if(modalRef.current){
            modalRef.current.showModal()
        }
    },[])

    const closeModal = useCallback(()=> {
        if(modalRef.current){
            modalRef.current.close()
        }
    },[])
    return {modalRef, showModal, closeModal}
}