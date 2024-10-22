import React, { useRef, useState } from "react";
import PageListHeader from "../../ui/PageListHeader";
import TitleUI from "../../ui/TitleUI";
import ToggleButtonUI from "../../ui/ToggleButtonUI";
import WrapperUI from "../../ui/WrapperUI";
import { ReactComponent as MoveIcon } from "../../assets/svg/moveIcon.svg";
import { ReactComponent as RemoveIcon } from "../../assets/svg/close.svg";
import { IconWrapperUI } from "../../ui/IconWrapperUI";
import InputUI from "../../ui/InputUI";
import ButtonUI from "../../ui/ButtonUI";
import { ReactComponent as SaveIcon } from "../../assets/svg/save.svg";
import { questions } from "../../helpers/data";
import MedicineQuestionCard from "../../components/MedicineQuestionCard";
import useWindowResize from "../../hooks/useWindowResize";
import { ReactComponent as ArrowSlider } from "../../assets/svg/sliderArrow.svg";
import CustomFileInput from "../../components/CustomFileInput";
import { ReactComponent as UploadIcon } from "../../assets/svg/save.svg"; // Import your icon

const CreateDirectories = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef();
  const isMob = useWindowResize().width < 1024;
  const [textAreaValue, setTextAreaValue] = useState();

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };
  const [visited, setVisited] = useState(false);

  const onChangeinp = (e) => {
    if (e.target.value) {
      setVisited(true);
    } else {
      setVisited(false);
    }
  };
  return (
    <div className="list-pages create-directory-page">
      <PageListHeader
        titleText="Список справочников"
        description="Список страниц созданный вами. Редактируйте, создавайте и удаляйте."
        buttonText="Сохранить как черновик"
      />
      <div className="card">
        {isMob && (
          <>
            <IconWrapperUI bgColor="#F0F4F6" classN="prev-btn-slider">
              <ArrowSlider />
            </IconWrapperUI>
            <IconWrapperUI bgColor="#F0F4F6" classN="next-btn-slider">
              <ArrowSlider />
            </IconWrapperUI>
          </>
        )}

        <div className="tab-content directory-content" ref={ref}>
          {isMob && <TitleUI text="Вопросы" level="1" />}

          <div className="description-directory-content-parent">
            <div className="description-directory-content">
              <div className="count-of-visits">
                <div className="visits-content directory-card ">
                  <label htmlFor="directory-name">Название справочника</label>
                  <InputUI
                    id="directory-name"
                    placeholder="Введите название справочника"
                  />
                </div>
                <ToggleButtonUI isActive={true} text="Обязательный вопрос" />
              </div>

              <div className="choose-variant-block directory-card ">
                <label htmlFor="choose-opt">Описание справочника</label>

                <textarea
                  id="choose-opt"
                  value={textAreaValue}
                  className={`${visited ? "visited" : ""} choose-opt`}
                  placeholder="Введите описание справочника"
                  onChange={onChangeinp}
                ></textarea>
              </div>

              <div className="choose-answer ">
                <TitleUI text="Варианты ответа" level="3" />
                <div className="variants-of-option">
                  <CustomFileInput
                    placeholder="Загрузить JSON"
                    icon={UploadIcon}
                  />

                  {["Ибупрофен", "Аспирин", "Активированный уголь"].map(
                    (option, idx) => (
                      <WrapperUI key={idx} className="variant">
                        <div className="variant-opt">
                          <IconWrapperUI>
                            <MoveIcon />
                          </IconWrapperUI>
                          <p>{option}</p>
                        </div>
                        <IconWrapperUI>
                          <RemoveIcon />
                        </IconWrapperUI>
                      </WrapperUI>
                    )
                  )}
                  <InputUI
                    id="new-option"
                    placeholder="Введите вариант ответа"
                    classN="write-new-option"
                  />
                </div>
              </div>
            </div>
            <ButtonUI text="Сохранить" icon={SaveIcon} classN="save-btn" />
          </div>

          <div className="medicine-questions ">
            <div className="shadow"></div>
            {questions.map((item, index) => (
              <div
                key={index}
                style={{ zIndex: activeIndex === index ? 2 : 0 }}
                className={activeIndex === index ? "active-card" : ""}
              >
                <MedicineQuestionCard
                  active={activeIndex === index}
                  onClick={() => handleCardClick(index)}
                  {...item}
                />
              </div>
            ))}
            <button className="more-question">
              Еще вопросы
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#898989"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDirectories;
