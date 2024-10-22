import React, { useState } from 'react';
import { CardUI } from '../../ui/CardUI';
import CustomSelect from '../../ui/CustomSelectUI';
import { IconWrapperUI } from '../../ui/IconWrapperUI';
import ToggleButtonUI from '../../ui/ToggleButtonUI';
import WrapperUI from '../../ui/WrapperUI';
import {ReactComponent as Pen} from "../../assets/svg/pen.svg"
import {ReactComponent as CloseIcon} from "../../assets/svg/close.svg" 

const MedicineQuestionCard = ({onClick,numberQuestion,question,typeQuetsion,status=true, active=false,edit=false }) => {
   const [visited, setVisited] = useState(false);
   const [textAreaValue,setTextAreaValue]=useState()
  const onChangeinp = (e) => {
    if (e.target.value) {
      setVisited(true);
    } else {
      setVisited(false);
    }
    setTextAreaValue(e.target.value)
  };

  return (
    <div onClick={onClick} className='medicine-questions-card'  >
      <CardUI>
        <div className='namber-of-question'>
          <p>Вопрос №{numberQuestion}</p>
          <ToggleButtonUI text='Статус' isActive={status} />
        </div>
        <WrapperUI className='medicine-card-question'>
          <textarea className={visited ? "visited" : ""}  value={textAreaValue} onChange={onChangeinp} placeholder={question}/> 
        </WrapperUI>
        <CustomSelect placeholder={typeQuetsion} />
      </CardUI>

              <IconWrapperUI classN="edit-button"  ><Pen/></IconWrapperUI>
             <IconWrapperUI bgColor="#EDBECE" border={false} classN="close-icon"><CloseIcon/></IconWrapperUI>
    </div>
  );
};

export default MedicineQuestionCard;
