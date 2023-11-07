import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../Assets/amazon-logo.png";
import { auth } from "../Services/firebase";
import globalStore from "../Services/globalStore";
import "./Header.css";

export default function Header() {
  const { kartItems } = globalStore()
  // const [_, setUser] = useState(auth.currentUser)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
    // setUser(user)
  })
  },[])
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
          <span className="header__optionLineOne">Hello, {auth.currentUser?.email || 'Guest' }</span>
          <Link onClick={()=>auth.currentUser && signOut(auth)} to={!auth.currentUser && "/login" }><span className="header__optionLineTwo">{auth.currentUser ? 'Sign Out':'Sign In' }</span></Link>
        </div>
        <div className="header__option">
          <Link to="/orders">
            <div className="header__optionLineOne">Returns</div>
            <div className="header__optionLineTwo">& Orders</div>
          </Link>
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
