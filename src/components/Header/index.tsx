import React from "react";
import "../../styles/layout/_header.scss";

interface Props {
  step: number;
}
const Header: React.FC<Props> = ({ step }) => {
  return (
    <header className="header__container">
      <nav>
        <div className="headerItem__container">
          <button className={step === 1 ? 'paint' : ''}>1</button>
          <div className="headerInfo__container">
            <span>step 1</span>
            <span>your info</span>
          </div>
        </div>
        <div className="headerItem__container">
          <button className={step === 2 ? 'paint' : ''}>2</button>
          <div className="headerInfo__container">
            <span>step 2</span>
            <span>select plan</span>
          </div>
        </div>
        <div className="headerItem__container">
          <button className={step === 3 ? 'paint' : ''}>3</button>
          <div className="headerInfo__container">
            <span>step 3</span>
            <span>add-ons</span>
          </div>
        </div>
        <div className="headerItem__container">
          <button className={step > 3 ? 'paint' : ''}>4</button>
          <div className="headerInfo__container">
            <span>step 4</span>
            <span>summary</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
