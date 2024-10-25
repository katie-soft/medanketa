import React from 'react';
import { createContext, useState } from 'react';

export const RefContext = createContext({
  addBlock: false,
  setAddBlock: () => {},
});

export const RefProvider = ({ children }) => {
  const [addBlock, setAddBlock] = useState(false);
  return <RefContext.Provider value={{ addBlock, setAddBlock }}>{children}</RefContext.Provider>;
};
