import { React } from "react";
import "./Input.scss"

let Input = ({ type, value, onChange }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;