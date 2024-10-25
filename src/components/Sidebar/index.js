import React, { useState } from 'react'
import WrapperUI from '../../ui/WrapperUI'

import { ReactComponent as Arrow } from '../../assets/svg/arrowInHeader.svg'
import user from '../../assets/svg/user.svg'

import './sidebar.scss'
import { Link } from 'react-router-dom'
import { IconWrapperUI } from '../../ui/IconWrapperUI'
import ButtonUI from '../../ui/ButtonUI'
import TitleUI from '../../ui/TitleUI'
import { sidebarItems } from '../../helpers/data'
import { useWindowResize } from '../../hooks/useWindowResize'

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('')
  const isMob = useWindowResize()?.width < 1024

  return (
    <aside>
      {!isMob && (
        <WrapperUI>
          <div className='sidebar-wrapper'>
            {sidebarItems.map((item) => (
              <React.Fragment key={item.id}>
                {item.id === 'support' && <hr />}
                <Link className={activeItem === item.id ? 'active' : ''} onClick={() => setActiveItem(item.id)} to={item.path}>
                  {item.icon}
                  {item.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </WrapperUI>
      )}

      <div>
        <WrapperUI className='service-content'>
          <WrapperUI className='user-add-wrapper'>
            <IconWrapperUI>
              <img src={user} alt='' />
            </IconWrapperUI>
            <ButtonUI text='+ 35' />
          </WrapperUI>
          <div className='more-service-content'>
            <div className='content'>
              <TitleUI level='3' text='Другие сервисы' />
              <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает</p>
            </div>
            <IconWrapperUI classN='arrow-icon'>
              <Arrow />
            </IconWrapperUI>
          </div>
        </WrapperUI>
      </div>
    </aside>
  )
}
