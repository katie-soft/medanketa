import React from 'react'
import useWindowResize from '../../hooks/useWindowResize'
import { CardUI } from '../../ui/CardUI'
import InputUI from '../../ui/InputUI'
import TitleUI from '../../ui/TitleUI'
import ToggleButtonUI from '../../ui/ToggleButtonUI'

export const Seo = () => {
  const isMob = useWindowResize().width < 1024
  return (
    <div className='list-pages'>
      <div className='tab-content'>
        {isMob && <TitleUI text='SEO' level='1' />}

        <div className='seo-cards'>
          <CardUI>
            <div className='card-wrapper-content'>
              <label htmlFor='seo-h1'>H1</label>
              <InputUI id='seo-h1' label='seo-h1' placeholder='SEO заголовок' />
            </div>
          </CardUI>
          <CardUI>
            <div className='card-wrapper-content'>
              <label htmlFor='meta-title'>Заголовок</label>
              <InputUI id='meta-title' placeholder='Meta Title' />
            </div>
          </CardUI>
          <CardUI>
            <div className='card-wrapper-content'>
              <label htmlFor='meta-description'>Описание</label>
              <InputUI id='meta-description' placeholder='Meta Description' />
            </div>
          </CardUI>
          <CardUI>
            <div className='card-wrapper-content'>
              <label htmlFor='meta-keywords'>Ключевые слова</label>
              <InputUI id='meta-keywords' placeholder='Meta Keywords' />
            </div>
          </CardUI>
        </div>
        <CardUI classN='btn-container'>
          <div className='card-wrapper-content'>
            <label>Роли</label>
            <div className='toggle-anwser'>
              <ToggleButtonUI isActive='false' text='Участвует в поиске' />
              <ToggleButtonUI isActive='false' text='Участвует в sitemap' />
              <ToggleButtonUI isActive='false' text='Участвует в sitemap' />
              <ToggleButtonUI isActive='false' text='Участвует в поиске' />
              <ToggleButtonUI isActive='false' text='Участвует в sitemap' />
            </div>
          </div>
        </CardUI>
      </div>
    </div>
  )
}
