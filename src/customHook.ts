import { useState,ChangeEvent } from "react"

type initValueType = {
    [hogekey: string]: string;
}
export const useInput = (initValue:initValueType) => {
    const [values, setValues] = useState(initValue);
    const valueSet = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    }
    return { values, onChange: valueSet }
}