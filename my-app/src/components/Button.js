import React from 'react'
import './Button.css'

const STYLES = ['btn-primary', 'btn-outline']
const SIZES = ['btn-medium', 'btn-large']
const COLORS = ['btn-blue', 'btn-darkblue', 'btn-lightpink']
export const Button = ({
  text,
  color,
  onClick,
  buttonStyle,
  buttonSize,
  param,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
  const checkButtonColor = COLORS.includes(color) ? color : COLORS[0]

  return (
    <>
      <button
        className={`${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick={() => (param ? onClick(param) : onClick)}
      >
        {text}
      </button>
    </>
  )
}
