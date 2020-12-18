import React from 'react'

const Button = ({ text, type, onClick }) => (
    <button type={type} onClick={onClick}>{text}</button>
)

export default Button