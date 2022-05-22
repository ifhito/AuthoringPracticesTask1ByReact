import { ReactNode } from 'react';
const DialogInputWithLabel = ({label, children}:{label:string, children?: ReactNode }) => (
    <label>{label}: {children}</label>
)

export default DialogInputWithLabel;