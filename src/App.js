import React from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import VideoCard from "./components/VideoCard.js";
import SideNav from "./components/SideNav";
import TopTagsBar from "./components/TopTagsBar";

import VideoData from "./VideoData";

function App() {
    const Videos = VideoData.map((VideoData) => (
        <VideoCard
            thumbnail={VideoData.thumbnail}
            videoTitle={
                VideoData.videoTitle.length > 57
                    ? VideoData.videoTitle.substring(0, 58) + "..."
                    : VideoData.videoTitle
            }
            channelName={VideoData.channelName}
            channelIcon={VideoData.channelIcon}
            viewCount={VideoData.viewCount}
            duration={VideoData.duration}
            videoLenght={VideoData.videoLenght}
        />
    ));
    return (
        <div className="App">
            <TopNav userProfileImg="https://picsum.photos/40/40" />
            <div
                className="row"
                style={{ alignItems: "flex-start", width: "100%" }}
            >
                <SideNav />
                <div className="mainContent">
                    <TopTagsBar />
                    <div className="videos">{Videos}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
