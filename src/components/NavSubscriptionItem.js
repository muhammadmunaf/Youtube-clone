import React from "react";

export default function NavSubscriptionItem(props) {
    return (
        <a href="#" className="navItem" style={{ position: "relative" }}>
            <img className="channelIcon" src={props.channelIcon} alt="" />
            <p className="navItemText">{props.channelName}</p>
            <div className="dot" style={{ display: `${props.newVideo}` }}></div>
        </a>
    );
}
