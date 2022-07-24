import React from "react";
import SideNavItem from "./SideNavItem";
import NavSubscriptionItem from "./NavSubscriptionItem";
import "./styles.css";

import HomeIcon from "../icons/home.svg";
import ExploreIcon from "../icons/explore.svg";
import SubIcon from "../icons/subscriptions.svg";
import LibIcon from "../icons/library.svg";
import HistoryIcon from "../icons/history.svg";
import YourVidIcon from "../icons/yourVideos.svg";
import WatchLaterIcon from "../icons/watchLater.svg";
import LikedVideos from "../icons/liked.svg";
import ShowMoreIcon from "../icons/arrowBottom.svg";
import SportsIcon from "../icons/sports.svg";
import GamingIcon from "../icons/gaming.svg";
import LiveIcon from "../icons/live.svg";
import CreatorIcon from "../icons/youtubeCreator.svg";
import YouTubeMusicIcon from "../icons/youtubeMusic.svg";
import YouTubeKidsIcon from "../icons/youtubeKids.svg";
import YouTubeTVIcon from "../icons/youtubeTV.svg";
import SettingsIcon from "../icons/settings.svg";
import ReportIcon from "../icons/report.svg";
import HelpIcon from "../icons/help.svg";
import FeedbackIcon from "../icons/feedback.svg";

export default function SideNav() {
    return (
        <nav>
            <div className="navSection">
                <SideNavItem
                    linkText="Home"
                    linkIcon={HomeIcon}
                    state="active"
                />
                <SideNavItem linkText="Explore" linkIcon={ExploreIcon} />
                <SideNavItem linkText="Subscription" linkIcon={SubIcon} />
            </div>
            <div className="navSection">
                <SideNavItem linkText="Library" linkIcon={LibIcon} />
                <SideNavItem linkText="History" linkIcon={HistoryIcon} />
                <SideNavItem linkText="Your Videos" linkIcon={YourVidIcon} />
                <SideNavItem linkText="Watch Later" linkIcon={WatchLaterIcon} />
                <SideNavItem linkText="Liked Videos" linkIcon={LikedVideos} />
                <SideNavItem linkText="Show More" linkIcon={ShowMoreIcon} />
            </div>
            <div className="navSection">
                <h4 className="navTitle">Subscriptions</h4>
                <NavSubscriptionItem
                    channelIcon="https://picsum.photos/40/40"
                    channelName="Peter Mcinon"
                />
                <NavSubscriptionItem
                    channelIcon="https://picsum.photos/45/45"
                    channelName="Free Code Camp"
                    newVideo="none"
                />
                <NavSubscriptionItem
                    channelIcon="https://picsum.photos/50/50"
                    channelName="Travel Vibes"
                    newVideo="none"
                />
                <NavSubscriptionItem
                    channelIcon="https://picsum.photos/56/56"
                    channelName="Benn TK"
                    newVideo="none"
                />
                <SideNavItem linkText="Show 41 More" linkIcon={ShowMoreIcon} />
            </div>
            <div className="navSection">
                <h4 className="navTitle">Explore</h4>
                <SideNavItem linkText="Gaming" linkIcon={GamingIcon} />
                <SideNavItem linkText="Live" linkIcon={LiveIcon} />
                <SideNavItem linkText="Sports" linkIcon={SportsIcon} />
            </div>
            <div className="navSection">
                <h4 className="navTitle">More from youtube</h4>
                <SideNavItem linkText="Creator Studio" linkIcon={CreatorIcon} />
                <SideNavItem
                    linkText="YouTube Music"
                    linkIcon={YouTubeMusicIcon}
                />
                <SideNavItem
                    linkText="Youtube Kids"
                    linkIcon={YouTubeKidsIcon}
                />
                <SideNavItem linkText="Youtube TV" linkIcon={YouTubeTVIcon} />
            </div>
            <div className="navSection">
                <SideNavItem linkText="Settings" linkIcon={SettingsIcon} />
                <SideNavItem linkText="Report History" linkIcon={ReportIcon} />
                <SideNavItem linkText="Help" linkIcon={HelpIcon} />
                <SideNavItem linkText="Send Feedback" linkIcon={FeedbackIcon} />
            </div>
            <div className="navSection sideNavLinks">
                <div className="row">
                    <a href="">About</a>
                    <a href="">Press</a>
                    <a href="">Copyright</a>
                </div>
                <div className="row">
                    <a href="">Contact Us</a>
                    <a href="">Creators</a>
                </div>
                <div className="row">
                    <a href="">Advertise</a>
                    <a href="">Developers</a>
                </div>

                <div className="row" style={{ marginTop: 16 }}>
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                    <a href="">Policy & Safety</a>
                </div>
                <div className="row">
                    <a href="">How YouTube Works</a>
                </div>
                <div className="row">
                    <a href="">Test New Features</a>
                </div>
                <div className="row" style={{ marginTop: 16 }}>
                    <p>© 2022 Google LLC</p>
                </div>
            </div>
        </nav>
    );
}
