import React from 'react'

const buttonStyle = {
  padding: '5px 10px'
};

const Button = (props) => {
  return (
    <button
    style={buttonStyle}
    onClick={props.handleClick}>{props.children}</button>
  )
}

Button.defaultProps = {
    onClick: () => {},
    label: ''
};

export default Button;
