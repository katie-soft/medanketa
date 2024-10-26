import React from 'react';

import { ReactComponent as Folder } from '../assets/svg/folder.svg';
import { ReactComponent as Arrow } from '../assets/svg/arrowInHeader.svg';
import { ReactComponent as AnketaIcon } from '../assets/svg/anketa.svg';
import { ReactComponent as BookIcon } from '../assets/svg/book.svg';
import { ReactComponent as FaqIcon } from '../assets/svg/faq.svg';
import { ReactComponent as LaptopIcon } from '../assets/svg/laptop.svg';
import { ReactComponent as LogIcon } from '../assets/svg/log.svg';
import { ReactComponent as MicrophoneIcon } from '../assets/svg/microphone.svg';
import { ReactComponent as SettingIcon } from '../assets/svg/setting.svg';
import { ReactComponent as SpravochnikIcon } from '../assets/svg/spravochnik.svg';
import { ReactComponent as UserIcon } from '../assets/svg/sidebarUser.svg';

export const allPageData = [
  {
    name: 'Главная',
    date: '28.01.2025',
    active: true,
    iconTitle: <Folder />,
    edit: true,
    remove: true,
  },
  {
    name: 'Контакты',
    date: '28.01.2025',
    active: false,
    edit: true,
    remove: true,
  },
  { name: 'О нас', date: '28.01.2025', active: true, edit: true, remove: true },
];
export const anketaData = [
  {
    name: 'Анкета для больных варвар',
    creator: 'Васильев В.В.',
    date: '28.01.2025',
    active: true,
    iconCreator: <Arrow />,
    edit: true,
    remove: true,
  },
  {
    name: 'Опрос для исследованияисследования ',
    creator: 'Васильев В.В.',
    date: '28.01.2025',
    active: false,
    iconCreator: <Arrow />,
    edit: true,
    remove: true,
  },
  {
    name: 'Анкетирование амбулатамбулат',
    creator: 'Васильев В.В.',
    date: '28`.01.2025',
    active: true,
    iconCreator: <Arrow />,
    edit: true,
    remove: true,
  },
  {
    name: 'Опрос для исследованиисследованияя',
    creator: '',
    date: '28`.01.2025',
    active: true,
    edit: true,
    remove: true,
    iconCreator: '',
  },
  {
    name: 'Анкетирование амбулатамбулат',
    creator: '',
    date: '28`.01.2025',
    active: true,
    edit: true,
    remove: true,
    iconCreator: '',
  },
];

export const userData = [
  {
    name: 'Васильев В.В.',
    iconTitle: <Arrow />,
    role: 'Администратор',
    date: '28.01.2025',
    active: true,
    edit: true,
  },
  {
    name: 'Маргаритова А.В.',
    iconTitle: <Arrow />,
    role: 'Врач',
    date: '28.01.2025',
    active: true,
    edit: true,
  },
  {
    name: 'купатова В.Н.',
    iconTitle: <Arrow />,
    role: 'Обычный',
    date: '28.01.2025',
    active: true,
    edit: true,
  },
];

export const logsData = [
  {
    typeAction: 'Пользователь Васильев В.В.',
    iconType: <Arrow />,
    date: '28.01.2025',
    action: 'создал анкету',
    orderNumber: '#2365',
  },
  {
    typeAction: 'Пользователь Васильев В.В.',
    iconType: <Arrow />,
    date: '28.01.2025',
    action: 'создал анкету',
    orderNumber: '#2365',
  },
  {
    typeAction: 'Пользователь Васильев В.В.',
    iconType: <Arrow />,
    date: '28.01.2025',
    action: 'создал анкету',
    orderNumber: '#2365',
  },
];
export const controlRolesData = [
  { role: 'Администратор', edit: true },
  { role: 'Интервьювер', edit: true },
  { role: 'Респондент', edit: true },
  { role: 'Заблокированный', edit: true },
];
export const directoriesData = [
  {
    name: 'МКБ-10',
    date: '28.01.2025',
    active: true,
    edit: true,
    remove: true,
  },
  {
    name: 'Контакты',
    date: '28.01.2025',
    active: true,
    edit: true,
    remove: true,
  },
  { name: 'О нас', date: '28.01.2025', active: true, edit: true, remove: true },
];
export const settingData = [
  {
    name: 'Регитсрация пользователя',
    recipient: 'Администратор',
    date: '28.01.2025',
    active: true,
    edit: true,
    remove: true,
  },
  {
    name: 'Создание анкеты',
    recipient: 'Администратор',
    date: '28.01.2025',
    active: false,
    edit: true,
    remove: true,
  },
  {
    name: 'Регитсрация пользователя',
    recipient: 'Пользователь',
    date: '28.01.2025',
    active: true,
    edit: true,
    remove: true,
  },
];

export const questions = [
  {
    number: 1,
    text: 'Вы будете в будущем обращаться к нынешнему стоматологу?',
    type: 'Текстовый',
  },
  {
    number: 2,
    text: 'Как вас зовут?',
    type: 'Текстовый',
  },
  {
    number: 3,
    text: 'Вы уже пользовались услугами стоматолога?',
    type: 'Варианты',
  },
  {
    number: 4,
    text: 'Сколько вам было лет при первом обращении к стоматологу',
    type: 'Текстовый',
  },
  {
    number: 5,
    text: 'Вы остались довольны оказанными услугами стоматолога?',
    type: 'Варианты',
  },
  {
    number: 6,
    text: 'Вы будете в будущем обращаться к нынешнему стоматологу?',
    type: 'Текстовый',
  },
  {
    number: 7,
    text: 'Вы бы стали рассматривать других стоматологов для будуещго лечения и профилактики ваших зубов?',
    type: 'Вопросы',
  },
];

export const sidebarItems = [
  {
    name: 'Страницы',
    icon: <BookIcon className="sidebar-icon" />,
    id: 'pages',
    path: '/',
  },
  {
    name: 'Анкеты',
    icon: <AnketaIcon className="sidebar-icon" />,
    id: 'anketa',
    path: 'questionary',
  },
  {
    name: 'Справочники',
    icon: <SpravochnikIcon className="sidebar-icon" />,
    id: 'spravochnik',
    path: 'directories',
  },
  {
    name: 'Пользователи',
    icon: <UserIcon className="sidebar-icon" />,
    id: 'user',
    path: 'users',
  },
  {
    name: 'Настройки',
    icon: <SettingIcon className="sidebar-icon" />,
    id: 'settings',
    path: 'settings',
  },
  {
    name: 'Общие',
    icon: <LaptopIcon className="sidebar-icon" />,
    id: 'general',
    path: 'common',
  },
  {
    name: 'Логи',
    icon: <LogIcon className="sidebar-icon" />,
    id: 'log',
    path: 'logs',
  },
  {
    name: 'Техподдержка',
    icon: <MicrophoneIcon className="sidebar-icon" />,
    id: 'support',
    path: 'support',
  },
  {
    name: 'FAQ',
    icon: <FaqIcon className="sidebar-icon" />,
    id: 'faq',
    path: 'faq',
  },
];

export const questionTypes = [
  { value: 'infoblock', label: 'Инфоблок' },
  { value: 'scale', label: 'Оценка по шкале' },
  { value: 'single-select', label: 'Одиночный выбор' },
  { value: 'multiple-select', label: 'Несколько вариантов ответов' },
  { value: 'time', label: 'Время' },
  { value: 'date', label: 'Дата' },
  { value: 'numbers', label: 'Числа' },
  { value: 'text', label: 'Ввод текста' },
  { value: 'directory', label: 'Справочник' },
];
