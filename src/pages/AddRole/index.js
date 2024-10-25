import React from 'react'
import TitleUI from '../../ui/TitleUI'
import ToggleButtonUI from '../../ui/ToggleButtonUI'
import { CardUI } from '../../ui/CardUI'
import PageListHeader from '../../ui/PageListHeader'
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg'
import { ReactComponent as SaveIcon } from '../../assets/svg/save.svg'
import { ReactComponent as ArrowHeader } from '../../assets/svg/arrowInHeader.svg'
import { ReactComponent as ArrowSlider } from '../../assets/svg/sliderArrow.svg'
import './style.scss'
import ButtonUI from '../../ui/ButtonUI'
import InputUI from '../../ui/InputUI'
import { Link, useNavigate } from 'react-router-dom'
import { IconWrapperUI } from '../../ui/IconWrapperUI/index'
import useWindowResize from '../../hooks/useWindowResize'

export const AddRole = () => {
  const isMob = useWindowResize().width < 1024
  const navigate = useNavigate()

  const backward = () => {
    console.log(444)
    navigate(-1)
  }

  return (
    <div className='list-pages add-role-container'>
      <PageListHeader
        titleText='Васильев В.В.'
        buttonText='Назад'
        navigate={true}
        path='/users/control-roles'
        onButtonClick={backward}
        icon={Arrow}
        description={isMob && 'Создавайте ваши персональные анкеты, и распространяйте среди пользователей'}
      />

      <div className='card'>
        {isMob && (
          <>
            <IconWrapperUI bgColor='#F0F4F6' classN='prev-btn-slider'>
              <ArrowSlider />
            </IconWrapperUI>
            <IconWrapperUI bgColor='#F0F4F6' classN='next-btn-slider'>
              <ArrowSlider />
            </IconWrapperUI>
          </>
        )}

        <div className='tab-content'>
          <TitleUI text={isMob ? 'Основное' : 'Данные учетной записи'} level='3' />

          <div className='add-role-cards'>
            <CardUI>
              <div className='card-wrapper-content'>
                <label htmlFor='login'>Логин</label>
                <InputUI id='login' placeholder='vasily11' />
              </div>
            </CardUI>

            <CardUI>
              <div className='card-wrapper-content'>
                <label htmlFor='email'>Почта</label>
                <InputUI id='email' placeholder='mail@mail.ru' />
                <Link to='' className='send-new-pass'>
                  Выслать новый пароль на почту
                  <IconWrapperUI classN='row-role-icon'>
                    <ArrowHeader />
                  </IconWrapperUI>
                </Link>
              </div>
            </CardUI>

            <CardUI>
              <div className='card-wrapper-content'>
                <label htmlFor='password'>Пароль</label>
                <InputUI id='password' placeholder='pass' type='password' />
              </div>
            </CardUI>
          </div>

          <CardUI classN='btn-container'>
            <div className='card-wrapper-content'>
              <label>Роли</label>
              <div className='toggle-answer'>
                <ToggleButtonUI isActive={false} text='Администратор' />
                <ToggleButtonUI isActive={false} text='Менеджер' />
                <ToggleButtonUI isActive={false} text='Интервьюер' />
                <ToggleButtonUI isActive={true} text='Респондент' />
                <ToggleButtonUI isActive={false} text='Заблокировать' />
              </div>
            </div>
          </CardUI>

          <div className='explanation-text-block'>
            <p className='explanation-text'>
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что
              тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах,
              которое не получается.
            </p>
            <ButtonUI text='Сохранить' icon={SaveIcon} classN='save-btn' />
          </div>
        </div>
      </div>
    </div>
  )
}
