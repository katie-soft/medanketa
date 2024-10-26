import React from 'react';
import { questionTypes } from '../../../../helpers/data';

const AdditionalFields = ({ questionType }) => {
  const element = questionTypes.filter((question) => question.value === questionType)[0].fields;
  return <div>{element}</div>;
};

export default AdditionalFields;
