import React from "react";

import TopTagsItem from "./TopTagsItem";

export default function TopTagsBar() {
    return (
        <div className="topTagsBar">
            <TopTagsItem tagText="All" state="active" />
            <TopTagsItem tagText="Gaming" />
            <TopTagsItem tagText="Movies" />
            <TopTagsItem tagText="Education" />
        </div>
    );
}
