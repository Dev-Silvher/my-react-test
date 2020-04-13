import React from 'react';

const Input = props => {
    return(
        <input 
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.handleInput}
            onBlur={props.handleInputValidation}
            required
        />
    )
}

export default Input;