import React from "react";
import "./styles.css";

import { FiSearch, FiMic } from "react-icons/fi";
import SearchIcon from "../icons/search.svg";
import MicIcon from "../icons/mic.svg";

export default function() {
    return (
        <div className="searchBar">
            <input type="text" placeholder="Search" />
            <button>
                {/* <FiSearch size={20} color={"#fff"} /> */}
                <img src={SearchIcon} alt="" />
            </button>

            <button className="micBtn">
                {/* <FiMic size={20} color={"#fff"} /> */}
                <img src={MicIcon} alt="" />
            </button>
        </div>
    );
}
