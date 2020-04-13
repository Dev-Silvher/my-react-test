import React from 'react';

const Error = props => {
    if (props.isHidden) {return null;}
    return (
      <span>
        {props.errorMessage}
      </span>
    )
}

export default Error;