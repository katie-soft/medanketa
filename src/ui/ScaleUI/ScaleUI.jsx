import React from 'react';
import './styles.scss';
import CustomCheckbox from '../CustomCheckbox';

const Scale = ({ options, answers }) => {
  return (
    <>
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
      {options.map((option) => (
        <div key={option.value} className="mobile-scale-wrapper">
          <span className="mobile-scale-title">{option.name}</span>
          <table className="mobile-scale">
            <thead>
              <tr>
                {answers.map((answer) => (
                  <td key={answer.value}>{answer.name}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {answers.map((answer) => (
                  <td key={answer.value}>
                    <CustomCheckbox />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default Scale;
