import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn-primary', 'btn-outline']
const SIZES = ['btn-medium', 'btn-large', '']
const COLORS = ['btn-blue', 'btn-darkblue', 'btn-lightpink', 'btn-lilac']
export const Button = ({
  text,
  color,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  icon,
  dest,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
  const checkButtonColor = COLORS.includes(color) ? color : COLORS[0]
  const checkType = type ? type : 'button'

  return (
    <>
      {dest ? (
        <Link to={dest}>
          <button
            className={`${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
            onClick={onClick}
            type={checkType}
          >
            <i className={icon ? icon : null} />
            {text}
          </button>
        </Link>
      ) : (
        <button
          className={`${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
          onClick={onClick}
          type={checkType}
        >
          <i className={icon ? icon : null} />
          {text}
        </button>
      )}
    </>
  )
}
