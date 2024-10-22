export const handleNextClick = (activeIndex, tabs, handleClick) => {
  const nextIndex = (activeIndex + 1) % tabs.length; 
  handleClick(nextIndex, tabs[nextIndex].tabName);
};

export const handlePrevClick = (activeIndex, tabs, handleClick) => {
  const prevIndex = (activeIndex - 1 + tabs.length) % tabs.length;  
  handleClick(prevIndex, tabs[prevIndex].tabName);
};

