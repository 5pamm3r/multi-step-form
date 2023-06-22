import React from "react";
import "../../styles/layout/_header.scss";

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

//agregar validaciones para setStep.
const Header: React.FC<Props> = ({ step, setStep }) => {
  return (
    <header className="header__container">
      <nav>
        <div className="headerItem__container">
          <button className={step === 1 ? 'paint' : ''} onClick={() => setStep(1)}><span>1</span></button>
          <div className="headerInfo__container">
            <span>step 1</span>
            <span>your info</span>
          </div>
        </div>
        <div className="headerItem__container">
          <button className={step === 2 ? 'paint' : ''} onClick={() => setStep(2)}><span>2</span></button>
          <div className="headerInfo__container">
            <span>step 2</span>
            <span>select plan</span>
          </div>
        </div>
        <div className="headerItem__container">
          <button className={step === 3 ? 'paint' : ''} onClick={() => setStep(3)}><span>3</span></button>
          <div className="headerInfo__container">
            <span>step 3</span>
            <span>add-ons</span>
          </div>
        </div>
        <div className="headerItem__container">
          <button className={step > 3 ? 'paint' : ''} onClick={() => setStep(4)}><span>4</span></button>
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
