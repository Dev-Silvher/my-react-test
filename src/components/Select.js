import React from 'react';

const Select = props => {
    return (
        <select
            name={props.name}
            required>
            <option value='' disabled selected>{props.placeholder}</option>
            }
            {props.options.map(option =>
                    <option
                        key={option.type}
                        value={option.type}
                        label={option.type}>{option.type}
                    </option>
                )
            }
        </select>
    )
}

export default Select;