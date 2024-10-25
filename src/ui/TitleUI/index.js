import React from 'react'
import './titleUI.scss'

const TitleUI = ({ text, level = 1 }) => {
  const Tag = `h${level}`
  return <Tag className={`title title-${level}`}>{text}</Tag>
}

export default TitleUI
