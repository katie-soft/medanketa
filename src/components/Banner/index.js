import { Link } from 'react-router-dom';
import "./style.scss";

import { ReactComponent as PlayIcon } from "../../assets/svg/playIcon.svg";
import { ReactComponent as ArrowIcon } from "../../assets/svg/arrowIcon.svg";

const Banner = () => {

  return (
      <div className='banner'>
        <div className='banner-content'>
          <PlayIcon className='banner-icon' />
          <div>
            <span className='title'>Уважаемый пользователь!</span>
            <span className='text'>Если у вас возникли трудности, вы можете посмостреть видео о правильности составления анкеты</span>
          </div>
        </div>
        <Link className='link' to="#">
          <span>Смотреть</span>
          <ArrowIcon />
        </Link>
      </div>
  )
}

export default Banner;