import React, { useContext } from "react";
import "../../styles/layout/_header.scss";
import UserContext from '../../context/userContext';
import { User } from "../../types/userType";

interface Props {
  step: number;
}

const Header: React.FC<Props> = ({ step }) => {

  return (
    <header className="header__container">
      <nav>
        <div className="headerItem__container">
          <div className={`circle ${step === 1 ? 'paint' : ''}`}><span>1</span></div>
          <div className="headerInfo__container">
            <span>step 1</span>
            <span>your info</span>
          </div>
        </div>
        <div className="headerItem__container">
          <div className={`circle  ${step === 2 ? 'paint' : ''}`}><span>2</span></div>
          <div className="headerInfo__container">
            <span>step 2</span>
            <span>select plan</span>
          </div>
        </div>
        <div className="headerItem__container">
          <div className={`circle ${step === 3 ? 'paint' : ''}`}><span>3</span></div>
          <div className="headerInfo__container">
            <span>step 3</span>
            <span>add-ons</span>
          </div>
        </div>
        <div className="headerItem__container">
          <div className={`circle ${step > 3 ? 'paint' : ''}`}><span>4</span></div>
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
