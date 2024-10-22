import React, { useContext, useState } from 'react';
import { ReactComponent as WhatsAppIcon } from "../../assets/svg/whatsUp.svg";
import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";
import CustomSelect from '../../ui/CustomSelectUI';
import { IconWrapperUI } from '../../ui/IconWrapperUI';
import InputUI from '../../ui/InputUI';
import "./style.scss";
import { RefContext } from '../../Context/refHeight';

const SocialMediaSelector = () => {
  const [socialMediaBlocks, setSocialMediaBlocks] = useState([{}]);
  const { addBlock, setAddBlock } = useContext(RefContext);  
  const socialMediaLinks = {
    Facebook: 'https://www.facebook.com',
    Twitter: 'https://www.twitter.com',
    Instagram: 'https://www.instagram.com',
    LinkedIn: 'https://www.linkedin.com',
  };

  const handleSelectChange = (index, event) => {
    const newBlocks = [...socialMediaBlocks];
    newBlocks[index].platform = event.target.value;
    setSocialMediaBlocks(newBlocks);
  };

  const addSocialMediaBlock = () => {
    setAddBlock(true);  
    setSocialMediaBlocks([...socialMediaBlocks, {}]);  
  };

  const removeSocialMediaBlock = (index) => {
    const newBlocks = socialMediaBlocks.filter((_, i) => i !== index);
    setSocialMediaBlocks(newBlocks);
  };

  return (
    <div className="social-media-content">
      {socialMediaBlocks.map((block, index) => (
        <div className="social-media-choose" key={index}>
          <div className="soc-med-profile">
            <p> Соц.сеть</p>
             <CustomSelect
              id={`platform-${index}`}
              arrow={false}
               allowToggle ={false}
               
              icon={<WhatsAppIcon />}
             />
          </div>

          <div className="soc-med-profile">
            <label htmlFor={`link-${index}`}> Ссылка </label>
            <InputUI
              id={`link-${index}`}
               placeholder="@golosmordora"
            />
          </div>

          <IconWrapperUI 
            borderColor='#C0C0C0' 
            border={true} 
            onClick={() => removeSocialMediaBlock(index)}
          >
            <CloseIcon />
          </IconWrapperUI>
        </div>
      ))}
      <button onClick={addSocialMediaBlock} className="add-social-media-block">Добавить + </button>
    </div>
  );
};

export default SocialMediaSelector;
