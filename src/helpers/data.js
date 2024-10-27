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

import {
  SymbolsNum,
  NumberRange,
  DateRange,
  TimeRange,
  Select,
  DirectorySelect,
  Scale,
} from '../pages/CreateQuestionary/Questions/AdditionalFields/index.js';

import questionaryLogo from '../assets/img/qLogo.png';

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
  { value: 'infoblock', label: 'Инфоблок', fields: [] },
  {
    value: 'scale',
    label: 'Оценка по шкале',
    fields: (
      <Scale
        startOptions={[
          { value: 'ib', name: 'Ибупрофен' },
          { value: 'asp', name: 'Аспирин' },
          { value: 'ug', name: 'Активированный уголь' },
        ]}
        startAnswers={[
          { value: '1', name: 'Недоволен' },
          { value: '2', name: 'Скорее недоволен' },
          { value: '3', name: 'Скорее доволен' },
          { value: '4', name: 'Доволен' },
        ]}
      />
    ),
  },
  {
    value: 'single-select',
    label: 'Одиночный выбор',
    fields: (
      <Select
        startOptions={[
          { value: 'ib', name: 'Ибупрофен' },
          { value: 'asp', name: 'Аспирин' },
          { value: 'ug', name: 'Активированный уголь' },
        ]}
      />
    ),
  },
  {
    value: 'multiple-select',
    label: 'Несколько вариантов ответов',
    fields: (
      <Select
        startOptions={[
          { value: 'ib', name: 'Ибупрофен' },
          { value: 'asp', name: 'Аспирин' },
          { value: 'ug', name: 'Активированный уголь' },
        ]}
      />
    ),
  },
  { value: 'time', label: 'Время', fields: <TimeRange /> },
  { value: 'date', label: 'Дата', fields: <DateRange /> },
  { value: 'numbers', label: 'Числа', fields: <NumberRange /> },
  { value: 'text', label: 'Ввод текста', fields: <SymbolsNum /> },
  { value: 'directory-select', label: 'Справочник', fields: <DirectorySelect directoryId="MKB10" /> },
];

export const directories = [
  {
    name: 'МКБ10',
    value: 'MKB10',
    options: [
      { value: 'ib', name: 'Ибупрофен' },
      { value: 'asp', name: 'Аспирин' },
      { value: 'ug', name: 'Активированный уголь' },
    ],
  },
];

export const questionary = {
  title: 'Анкета для больных варикозом',
  author: 'Васильев В.В.',
  image: questionaryLogo,
  questionList: [
    {
      id: 0,
      questionText: 'Давайте познакомимся. Как вас зовут?',
      questionType: 'text',
    },
    {
      id: 1,
      questionText: 'Опишите ваш рабочий день',
      questionType: 'text',
    },
    {
      id: 2,
      questionText: 'Вы пробовали пользоваться услугами врача?',
      questionType: 'radio',
      options: [
        {
          value: 'yes',
          title: 'Да',
        },
        {
          value: 'no',
          title: 'Нет',
        },
      ],
    },
    {
      id: 3,
      questionText: 'Каким препаратом вы пользовались?',
      questionType: 'single-select',
      options: [
        { value: 'ib', label: 'Ибупрофен' },
        { value: 'asp', label: 'Аспирин' },
        { value: 'ug', label: 'Активированный уголь' },
      ],
    },
    {
      id: 4,
      questionText: 'Когда вы начали пить таблетки? ',
      questionType: 'date',
    },
    {
      id: 5,
      questionText: 'Когда вы закончили пить таблетки? ',
      questionType: 'date',
    },
    {
      id: 6,
      questionText: 'В каких городах вы бывали?',
      questionType: 'checkbox',
      options: [
        { value: 'Moscow', name: 'Москва' },
        { value: 'SPb', name: 'Санкт-Петербург' },
        { value: 'Samara', name: 'Самара' },
        { value: 'NNovgorod', name: 'Нижний Новгород' },
      ],
    },
    {
      id: 7,
      questionText: 'Насколько вы довольны препаратами, которые вам выписали?',
      questionType: 'scale',
      options: [
        { value: 'fgds', name: 'ФГДС' },
        { value: 'uzi1', name: 'Узи сердца' },
        { value: 'uzi2', name: 'Узи брюшной полости' },
        { value: 'oak', name: 'ОАК' },
      ],
      answers: [
        { value: '1', name: 'Недоволен' },
        { value: '2', name: 'Скорее недоволен' },
        { value: '3', name: 'Нейтрально' },
        { value: '4', name: 'Скорее доволен' },
        { value: '5', name: 'Доволен' },
      ],
      multipleChoice: true,
    },
    {
      id: 8,
      questionText: 'Оцените представленные препараты, по шкале от 1 до 10, где 10 это отлично. Ибупрофен',
      questionType: 'number',
      minNumber: 1,
      maxNumber: 10,
      decimalAllowed: true,
    },
    {
      id: 9,
      questionText: 'Оцените представленные препараты, по шкале от 1 до 10, где 10 это отлично. Аспирин',
      questionType: 'number',
      minNumber: 1,
      maxNumber: 10,
      decimalAllowed: true,
    },
    {
      id: 10,
      questionText: 'Оцените представленные препараты, по шкале от 1 до 10, где 10 это отлично. Активированный уголь',
      questionType: 'number',
      minNumber: 1,
      maxNumber: 10,
      decimalAllowed: true,
    },
    {
      id: 11,
      questionText: 'Сколько раз вы были у врача?',
      questionType: 'number',
      minNumber: 1,
      maxNumber: 10000,
      decimalAllowed: false,
    },
    {
      id: 12,
      questionText: 'Сколько вам лет?',
      questionType: 'radio',
      options: [
        { value: '0-16', title: '0-16' },
        { value: '16-32', title: '16-32' },
        { value: '32-46', title: '32-46' },
        { value: '46-58', title: '46-58' },
        { value: '58-70', title: '58-70' },
        { value: '70-100', title: '70-100' },
      ],
    },
    {
      id: 13,
      questionText: 'Какие препараты вы принимали от головной боли?',
      questionType: 'checkbox',
      options: [
        { value: '1', name: 'Препарат 1' },
        { value: '2', name: 'Препарат 2' },
        { value: '3', name: 'Препарат 3' },
        { value: '4', name: 'Препарат 4' },
      ],
    },
  ],
};
