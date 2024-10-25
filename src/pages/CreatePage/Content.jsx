import React from 'react'
import useWindowResize from '../../hooks/useWindowResize'
import TitleUI from '../../ui/TitleUI'

export const Content = () => {
  const isMob = useWindowResize().width < 1024
  return (
    <div className='list-pages'>
      <div className='tab-content'>{isMob && <TitleUI text='Основное' level='1' />}</div>
    </div>
  )
}
