import React from "react";
import "../../styles/layout/_header.scss";

const Header: React.FC = () => {
  return (
    <header className="header__container">
      <nav>
        <div className="headerItem__container">
          <button>1</button>
          <div className="headerInfo__container">
            <span>step 1</span>
            <span>your info</span>
          </div>
        </div>
        <div className="headerItem__container">
          <button>2</button>
          <div className="headerInfo__container">
            <span>step 2</span>
            <span>select plan</span>
          </div>
        </div>
        <div className="headerItem__container">
          <button>3</button>
          <div className="headerInfo__container">
            <span>step 3</span>
            <span>add-ons</span>
          </div>
        </div>
        <div className="headerItem__container">
          <button>4</button>
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
