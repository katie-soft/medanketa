import React from 'react'
import './wrapperUI.scss'

const WrapperUI = ({ children, className = '' }) => {
  return <div className={`wrapper ${className}`}>{children}</div>
}

export default WrapperUI
