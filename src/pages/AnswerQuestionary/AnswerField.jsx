import React from 'react';
import InputUI from '../../ui/InputUI';
import CustomRadio from '../../ui/CustomRadioUI';
import CustomCheckbox from '../../ui/CustomCheckbox';
import CustomSelect from '../../ui/CustomSelectUI';
import Scale from '../../ui/ScaleUI/ScaleUI';

const AnswerField = ({ questionData }) => {
  const renderField = () => {
    switch (questionData.questionType) {
      case 'text':
        return <InputUI type="text" placeholder="Введите свой ответ" />;
      case 'number':
        return (
          <InputUI
            type="number"
            isWide={false}
            min={questionData.minNumber}
            max={questionData.maxNumber}
            step={questionData.decimalAllowed ? 1 : 0.01}
            placeholder={questionData.minNumber}
          />
        );
      case 'date':
        return <InputUI isWide={false} type="date" />;
      case 'radio':
        return (
          <>
            <CustomRadio options={questionData.options} name={`radio-${questionData.id}`} />
            <p className="question-comment">Можно выбрать только один вариант ответа</p>
          </>
        );
      case 'checkbox':
        return (
          <div>
            {questionData.options.map((option) => (
              <CustomCheckbox label={option.name} value={option.value} key={option.value} />
            ))}
            <p className="question-comment">Можно выбрать несколько вариантов ответа</p>
          </div>
        );
      case 'single-select':
        console.log(questionData.options);
        return (
          <CustomSelect
            options={questionData.options}
            selectedOption={questionData.options[0].label}
            placeholder="Выберите ответ"
            onSelect={() => console.log('Ответ выбран')}
          />
        );
      case 'scale':
        return (
          <>
            <Scale answers={questionData.answers} options={questionData.options} />
            <p className="question-comment">Можно выбрать несколько вариантов ответа</p>
          </>
        );
    }
  };

  return <div>{renderField()}</div>;
};

export default AnswerField;
