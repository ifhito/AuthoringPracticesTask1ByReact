import React from "react";
const DialogInput = ({handleChange, value, type, name}:{handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, value:string,type:string, name:string}) => (
    <input type={type} name={name} value={value} onChange={handleChange}/>
)

export default DialogInput;