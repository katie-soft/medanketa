import { ReactComponent as Folder } from "../assets/svg/folder.svg";
import { ReactComponent as Arrow } from "../assets/svg/arrowInHeader.svg";
import { ReactComponent as AnketaIcon } from "../assets/svg/anketa.svg";
import { ReactComponent as BookIcon } from "../assets/svg/book.svg";
import { ReactComponent as FaqIcon } from "../assets/svg/faq.svg";
import { ReactComponent as LaptopIcon } from "../assets/svg/laptop.svg";
import { ReactComponent as LogIcon } from "../assets/svg/log.svg";
import { ReactComponent as MicrophoneIcon } from "../assets/svg/microphone.svg";
import { ReactComponent as SettingIcon } from "../assets/svg/setting.svg";
import { ReactComponent as SpravochnikIcon } from "../assets/svg/spravochnik.svg";
import { ReactComponent as UserIcon } from "../assets/svg/sidebarUser.svg";

export const allPageData= [
    { name: "Главная", date: "28.01.2025", active: true, iconTitle: <Folder />,edit:true, remove:true},
    { name: "Контакты", date: "28.01.2025", active: false ,edit:true, remove:true},
    { name: "О нас", date: "28.01.2025", active: true,edit:true, remove:true },
  ];
export const anketaData= [
    { name: "Анкета для больных варвар", creator:"Васильев В.В." , date: "28.01.2025", active: true,  iconCreator:<Arrow/> ,edit:true , remove:true},
    { name: "Опрос для исследованияисследования ",creator:"Васильев В.В." ,  date: "28.01.2025", active: false, iconCreator:<Arrow/> ,edit:true, remove:true},
    { name: "Анкетирование амбулатамбулат", creator:"Васильев В.В." , date: "28`.01.2025", active: true ,  iconCreator:<Arrow/> ,edit:true, remove:true},
    { name: "Опрос для исследованиисследованияя", creator:"", date: "28`.01.2025", active: true ,edit:true, remove:true,iconCreator:"" },
    { name: "Анкетирование амбулатамбулат",  creator:"",  date: "28`.01.2025", active: true,edit:true, remove:true ,iconCreator:"" },
  ];

export const userData=[
      { name: "Васильев В.В.",  iconTitle:<Arrow/>, role:"Администратор" , date: "28.01.2025", active: true,edit:true },
      { name: "Маргаритова А.В.",  iconTitle:<Arrow/>, role:"Врач" , date: "28.01.2025", active: true ,edit:true},
      { name: "купатова В.Н.",  iconTitle:<Arrow/>, role:"Обычный" , date: "28.01.2025", active: true ,edit:true},
]

export const logsData=[
   { typeAction: "Пользователь Васильев В.В.",  iconType:<Arrow/>,  date: "28.01.2025", action:"создал анкету", orderNumber:"#2365" },
   { typeAction: "Пользователь Васильев В.В.",  iconType:<Arrow/>,  date: "28.01.2025", action:"создал анкету", orderNumber:"#2365" },
   { typeAction: "Пользователь Васильев В.В.",  iconType:<Arrow/>,  date: "28.01.2025", action:"создал анкету", orderNumber:"#2365" },
]
export const controlRolesData=[
      {role:"Администратор", edit:true },
      {role:"Интервьювер", edit:true },
      {role:"Респондент", edit:true },
      {role:"Заблокированный", edit:true  },
]
export const directoriesData= [
    { name: "МКБ-10", date: "28.01.2025", active: true, edit:true , remove:true},
      { name: "Контакты", date: "28.01.2025", active: true, edit:true , remove:true},
    { name: "О нас", date: "28.01.2025", active: true, edit:true , remove:true},

  ];
export const settingData=[
    {name:"Регитсрация пользователя",recipient:"Администратор",date: "28.01.2025", active: true,  edit:true,remove:true},
    {name:"Создание анкеты",recipient:"Администратор",date: "28.01.2025", active: false,  edit:true,remove:true},
    {name:"Регитсрация пользователя",recipient:"Пользователь",date: "28.01.2025", active: true,  edit:true,remove:true},
 ]

 export const questions=[
   {numberQuestion:6,question:"Вы будите в будущем обращаться к нынешнему стоматологу?",typeQuetsion:"Текстовый", active:true},
   {numberQuestion:1,question:"Вы будите в будущем обращаться к нынешнему стоматологу?",typeQuetsion:"Текстовый", active:true},
   {numberQuestion:2,question:"Вы будите в будущем обращаться к нынешнему стоматологу?",typeQuetsion:"Текстовый", active:true},
   {numberQuestion:3,question:"Вы будите в будущем обращаться к нынешнему стоматологу?",typeQuetsion:"Текстовый", active:true},
   {numberQuestion:5,question:"Как вас зовут?",typeQuetsion:"Текстовый", active:true},
   {numberQuestion:4,question:"Вы будите в будущем обращаться к нынешнему стоматологу?",typeQuetsion:"Текстовый", active:true},
   {numberQuestion:7,question:"Вы будите в будущем обращаться к нынешнему стоматологу?",typeQuetsion:"Текстовый", active:true},
   {numberQuestion:8,question:"Вы будите в будущем обращаться к нынешнему стоматологу?",typeQuetsion:"Текстовый", active:true},
 ]

  export const sidebarItems = [
    {
      name: "Страницы",
      icon: <BookIcon className="sidebar-icon" />,
      id: "pages",
      path:"/"
    },
    {
      name: "Анкеты",
      icon: <AnketaIcon className="sidebar-icon" />,
      id: "anketa",
      path: 'questionary'
    },
    {
      name: "Справочники",
      icon: <SpravochnikIcon className="sidebar-icon" />,
      id: "spravochnik",
      path:"directories"
    },
    {
      name: "Пользователи",
      icon: <UserIcon className="sidebar-icon" />,
      id: "user",
      path: 'users'
    },
    {
      name: "Настройки",
      icon: <SettingIcon className="sidebar-icon" />,
      id: "settings",
      path: 'settings'
    },
    {
      name: "Общие",
      icon: <LaptopIcon className="sidebar-icon" />,
      id: "general",
      path:"common"
    },
    { name: "Логи", icon: <LogIcon className="sidebar-icon" />, id: "log", path: 'logs' },
    {
      name: "Техподдержка",
      icon: <MicrophoneIcon className="sidebar-icon" />,
      id: "support",
      path:"support"
    },
    { name: "FAQ", icon: <FaqIcon className="sidebar-icon" />, id: "faq" ,path:"faq"},
  ];