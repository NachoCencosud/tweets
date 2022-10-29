import React from "react";
import './MainContentCards.scss'

const MainContentCards = (props) => {
  const { children } = props;

  return (
      <div className="main-container">{children}</div>
  );
};

export default MainContentCards;
