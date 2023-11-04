import React from "react";
import "./Header.css";
import amazonLogo from "../Assets/amazon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import globalStore from "../Services/globalStore";

export default function Header() {
  const {kartItems}=globalStore()
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={amazonLogo} alt="Amazon clone" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Morteza</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">{ kartItems.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
