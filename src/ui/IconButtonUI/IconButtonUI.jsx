import React from 'react'
import './styles.scss'
import { ReactComponent as CloseIcon } from '../../assets/svg/closeRed.svg'

const IconButtonUI = ({ type, className }) => {
  return <button className={`icon-button ${type} ${className}`}>{type === 'close' && <CloseIcon />}</button>
}

export default IconButtonUI
