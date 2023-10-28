import React, { useState } from "react";
import "./videoCard.css";

import { FiMoreVertical } from "react-icons/fi";
import Dropdown from "./Dropdown";

function VideoCard(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        console.log("Clicked!");
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="videoCard">
            <div style={{ position: "relative" }}>
                <img src={props.thumbnail} className="thumbnail" />
                <p className="videoLenght">{props.videoLenght}</p>
            </div>

            <div className="caption">
                <img src={props.channelIcon} className="channelIcon" />
                <div className="videoInfoContainer">
                    <h4 className="videoTitle">{props.videoTitle}</h4>
                    <p className="channelName">{props.channelName}</p>
                    <p className="videoInfo">
                        {props.viewCount} views • {props.duration} ago
                    </p>
                </div>
                <button
                    className="videoMoreBtn IconAnimation"
                    onClick={toggleDropdown}
                >
                    <FiMoreVertical size={20} color={"#fff"} />
                </button>
            </div>
            <Dropdown currentState={isDropdownOpen} />
        </div>
    );
}

export default VideoCard;
