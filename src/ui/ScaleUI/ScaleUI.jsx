import React from 'react';
import './styles.scss';
import CustomCheckbox from '../CustomCheckbox';

const Scale = ({ options, answers }) => {
  return (
    <table className="scale">
      <thead>
        <tr>
          <td></td>
          {answers.map((answer) => (
            <td key={answer.value}>{answer.name}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {options.map((option) => (
          <tr key={option.value}>
            <td>{option.name}</td>
            {answers.map((answer) => (
              <td key={answer.value}>
                <CustomCheckbox />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Scale;
