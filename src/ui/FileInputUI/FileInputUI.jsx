import './styles.scss';
import {ReactComponent as CloseIcon} from '../../assets/svg/closeRed.svg';

const FileInputUI = () => {
  return <div className='file-input-wrapper'>
    <button className='file-close-button'><CloseIcon /></button>
    <label htmlFor="file">Вставить / Изменить Логотип</label>
    <input className='file-input' type="file" name='file' id='file' />
  </div>
}

export default FileInputUI;