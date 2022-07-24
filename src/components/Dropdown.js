import React from "react";
import DropdownItem from "./DropdownItem";
import "./styles.css";

import QueueIcon from "../icons/queue.svg";
import WatchLaterIcon from "../icons/watchLater.svg";
import SaveIcon from "../icons/Save.svg";
import ReportIcon from "../icons/report.svg";
import CircleCrossIcon from "../icons/circleCross.svg";
import CircleCutIcon from "../icons/circleCut.svg";

export default function Dropdown(props) {
    return (
        <div
            className="dropdownContainer"
            style={{ display: props.currentState ? "block" : "none" }}
        >
            <DropdownItem itemText="Add to queue" itemIcon={QueueIcon} />
            <DropdownItem
                itemText="Save to Watch Later"
                itemIcon={WatchLaterIcon}
            />
            <DropdownItem itemText="Save to playlist" itemIcon={SaveIcon} />
            <div className="divider"></div>
            <DropdownItem
                itemText="Not Interested"
                itemIcon={CircleCrossIcon}
            />
            <DropdownItem
                itemText="Don't recommend channel"
                itemIcon={CircleCutIcon}
            />
            <DropdownItem itemText="Report" itemIcon={ReportIcon} />
        </div>
    );
}
