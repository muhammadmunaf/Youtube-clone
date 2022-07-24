import React from "react";

export default function TopTagsItem(props) {
    return (
        <button className={`topTagsItem ${props.state}`}>
            {props.tagText}
        </button>
    );
}
