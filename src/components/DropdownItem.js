import React from "react";

import "./styles.css";

export default function DropdownItem(props) {
    return (
        <a href="#" className="dropdownItem">
            <img src={props.itemIcon} alt="" width={24} />
            <p className="dropdownItemText">{props.itemText}</p>
        </a>
    );
}
