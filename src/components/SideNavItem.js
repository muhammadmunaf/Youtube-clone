import React from "react";
import "./styles.css";

export default function(props) {
    return (
        <a href="#" className={`navItem ${props.state}`}>
            <img src={props.linkIcon} alt="" width={24} />
            <p className="navItemText">{props.linkText}</p>
        </a>
    );
}
