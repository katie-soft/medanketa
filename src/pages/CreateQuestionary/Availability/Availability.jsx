import React from 'react'
import { useState } from 'react'
import { CardUI } from '../../../ui/CardUI'
import ToggleButtonUI from '../../../ui/ToggleButtonUI'
import InputUI from '../../../ui/InputUI'

import './styles.scss'

const Availability = () => {
  const [link, setLink] = useState('')
  const [password, setPassword] = useState('')
  const [time, setTime] = useState('')
  const [answersNum, setAnswersNum] = useState('')
  const [date, setDate] = useState('')

  return (
    <div className='availability-wrapper'>
      <CardUI>
        <p>Настройка доступности</p>
        <div className='card-wrapper-content'>
          <ToggleButtonUI text='Публичный доступ' isActive={true} />
          <label htmlFor='link'>Ссылка на анкету</label>
          <InputUI id='link' label='link' placeholder='Ссылка на анкету' value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <div className='card-wrapper-content'>
          <ToggleButtonUI text='Доступ к анкете по паролю' isActive={true} />
          <label htmlFor='password'>Пароль для доступа к анкете</label>
          <InputUI
            id='password'
            label='password'
            placeholder='Пароль для доступа к анкете'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ToggleButtonUI text='Доступ только авторизованным пользователям' isActive={true} />
        </div>
      </CardUI>
      <CardUI>
        <p>Время прохождения</p>
        <div className='card-wrapper-content'>
          <label htmlFor='time'>Ограничить время прохождения анкеты (мин.)</label>
          <InputUI id='time' label='time' placeholder='Время в минутах' value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div className='card-wrapper-content'>
          <label htmlFor='answersNum'>Закрыть анкету при достижении количества ответов:</label>
          <InputUI
            id='answersNum'
            label='answersNum'
            placeholder='Максимальное количество ответов'
            value={answersNum}
            onChange={(e) => setAnswersNum(e.target.value)}
          />
        </div>
        <div className='card-wrapper-content'>
          <label htmlFor='date'>Закрыть анкету к дате:</label>
          <InputUI id='date' label='date' placeholder='Дата' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
      </CardUI>
    </div>
  )
}

export default Availability
