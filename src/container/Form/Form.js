import React, { useState } from "react";
import './Form.scss';
import Button from "../../component/Button/Button";
import InputPassword from "../../component/InputPassword/InputPassword";
import InputUsername from "../../component/InputUserName/InputUserName";
import { validate } from '../../utils/Validate';

const Form = () => {
    const [formInputs, setFormInputs] = useState({
        userName: '',
        password: ''
    })
    const [errors, setErrors] = useState(null);

    const handleChangeInput = (event) => {
        const name = event.target.name
        const value = event.target.value

        setFormInputs({
            ...formInputs,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const validateErrors = validate(formInputs)

        if (validateErrors) {
            setErrors(validateErrors);
        } else {
            setErrors(null);
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleFormSubmit}>
                <InputUsername userName={formInputs.userName} handleChangeInput={handleChangeInput} />
                <InputPassword password={formInputs.password} handleChangeInput={handleChangeInput} />
                <Button />
            </form>
            {errors ? <p className="error-message"> {errors}  </p> : null}
        </div>
    );
}

export default Form;