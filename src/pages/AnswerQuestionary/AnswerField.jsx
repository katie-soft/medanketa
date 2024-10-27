import React from 'react';
import InputUI from '../../ui/InputUI';

const AnswerField = ({ questionData }) => {
  console.log(questionData);
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
          />
        );
      case 'date':
        return <InputUI isWide={false} type="date" />;
      case 'radio':
        return (
          <div>
            {questionData.options.map((option) => (
              <>
                <input type="radio" id={option.value} name={`radio-${questionData.id}`} value={option.value} />
                <label htmlFor={option.value}>{option.name}</label>
              </>
            ))}
          </div>
        );
      case 'checkbox':
        return (
          <div>
            {questionData.options.map((option) => (
              <>
                <input type="checkbox" id={option.value} name={`radio-${questionData.id}`} value={option.value} />
                <label htmlFor={option.value}>{option.name}</label>
              </>
            ))}
          </div>
        );
      case 'single-select':
        return (
          <select id={`select-${questionData.id}`}>
            {questionData.options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        );
      case 'scale':
        return (
          <table>
            <thead>
              <tr>
                <td>Название</td>
                {questionData.answers.map((answer) => (
                  <td key={answer.value}>{answer.name}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {questionData.options.map((option) => (
                <tr key={option.value}>
                  <td>{option.name}</td>
                  {questionData.answers.map((answer) => (
                    <td key={answer.value}>
                      <input type="checkbox" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
    }
  };

  return <div>{renderField()}</div>;
};

export default AnswerField;
