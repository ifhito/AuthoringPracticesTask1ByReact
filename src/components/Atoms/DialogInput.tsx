import React from "react";
const DialogInput = ({handleChange, value, type, name, checked}:{handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, value?:string,type:string, name?:string, checked?:boolean}) => (
    <input type={type} name={name} value={value} checked={checked} onChange={handleChange}/>
)

export default DialogInput;