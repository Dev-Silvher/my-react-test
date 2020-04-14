import React from 'react';

import Error from './Error';

const Input = props => {
    return(
        <div>
            <input 
                type={props.type}
                id={props.txtName}
                name={props.txtName}
                placeholder={props.placeholder}
                onChange={props.handleInput}
                onBlur={props.handleInputValidation}
                required
            />
            <Error
                isHidden={props.isHidden} 
                errorMessage={props.errorMessage}
                handleInput = {props.handleInput}
            />
        </div>
    )
}

export default Input;