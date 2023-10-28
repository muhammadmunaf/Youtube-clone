import React from "react";
import Logo from "../images/youtubeLogo.png";
import "./styles.css";

import SearchBar from "./SearchBar";
import MenuIcon from "../icons/hamburger.svg";
import CreateIcon from "../icons/create.svg";
import BellIcon from "../icons/notifications.svg";

export default function TopNav(props) {
    return (
        <header>
            <div className="row">
                <button className="IconAnimation">
                    <img src={MenuIcon} alt="" />
                </button>
                <a href="">
                    <img className="MainLogo" src={Logo} alt="" height={32} />
                </a>
            </div>
            <SearchBar />
            <div className="row" style={{ gap: 8 }}>
                <button className="IconAnimation">
                    <img src={CreateIcon} alt="" />
                </button>
                <button className="IconAnimation">
                    <img src={BellIcon} alt="" />
                </button>
                <button className="userProfileImg">
                    <img src={props.userProfileImg} alt="" />
                </button>
            </div>
        </header>
    );
}
