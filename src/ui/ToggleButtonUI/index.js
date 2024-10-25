import React, { useState } from 'react'
import './style.scss'

const ToggleButtonUI = ({ isActive, text = '' }) => {
  const [active, setActive] = useState(isActive)

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <div className='toggle-button-ui'>
      <div className={`switcher-content ${active ? 'active' : ''}`}>
        <div className={`switch ${active ? 'active' : ''}`} onClick={toggleActive}>
          <div className={`slider ${active ? 'active' : ''}`}></div>
        </div>
      </div>
      <span className={`switch-text ${active ? 'active' : ''}`}>{text ? text : active ? 'Активен' : 'Не активен'}</span>
    </div>
  )
}

export default ToggleButtonUI
