import React from "react";
import "./Header.css";
import amazonLogo from "../Assets/amazon-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import  ShoppingBasket  from "@mui/icons-material/ShoppingBasket";

export default function Header() {
  return (
    <div className="header">
          <img className="header__logo" src={amazonLogo} alt="Amazon clone"/>
          <div className="header__search">
              <input type="text" className="header__searchInput" />
              <SearchIcon className="header__searchIcon"/>
          </div>
          <div className="header__nav">
              <div className="header__option">
                  <span className="header__optionLineOne">Hello, Morteza</span>
                  <span className="header__optionLineTwo">Sign In</span>
              </div>
              <div className="header__option">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">& Orders</span></div>
              <div className="header__option">
                  <span className="header__optionLineOne">Your</span>
                  <span className="header__optionLineTwo">Prime</span>
              </div>
              <div className="header__optionBasket">
                  <ShoppingBasket />
                  <span className="header__optionLineTwo header__basketCount">0</span>
              </div>
          </div>
    </div>
  );
}
